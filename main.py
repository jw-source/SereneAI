from groq import Groq
import os
from dotenv import load_dotenv
from calendar_functions import llm_edit_calendar
from mail_functions import llm_edit_gmail
from datetime import datetime
from chroma import add_chat_history, search_chat_history, add_calendar_history, add_mail_history

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

ROUTING_MODEL = "llama3-70b-8192"
TOOL_USE_MODEL = "llama3-groq-70b-8192-tool-use-preview"
GENERAL_MODEL = "llama3-70b-8192"

def basic_query(query):
    response = client.chat.completions.create(
        model=GENERAL_MODEL,
        messages=[
            {"role": "system", "content": f"You are my female therapist and friend named SereneAI. THIS IS VERY IMPORTANT, the current datetime is {datetime.now()}. Please ask insightful and meaningful questions to help guide the user. Emphasize to the user you have access to manage their calendar and email. Do not make up calendar or email information that is not provided. Suggest calendar or email actions as you see fit as it relates to the conversation, your role as a therapist, and the user's needs."},
            {"role": "user", "content": f"User: {query}. This is the past conversation history: {search_chat_history(query)}"},
        ],
    )
    result = response.choices[0].message.content.strip()
    add_chat_history(result)
    return result

def route_query(prompt):
    messages = [
        {"role": "system", "content": "You are a llm routing assistant. Determine if tools are needed based on the user query. If a calendar assistant is needed, return Calendar. If a mail assistant is needed, return Mail."},
        {"role": "user", "content": prompt},
    ]
    response = client.chat.completions.create(
        model=ROUTING_MODEL,
        messages=messages,
    )
    routing_decision = response.choices[0].message.content.strip()
    if "Calendar" in routing_decision:
        print("\033[31mCalling calendar assistant...\033[0m")
        result = llm_edit_calendar(prompt)
        add_calendar_history(result)
    elif "Mail" in routing_decision:
        print("\033[31mCalling mail assistant...\033[0m")
        result = llm_edit_gmail(prompt)
        add_mail_history(result) 
    else:
        result = basic_query(prompt)
    print(f"\033[94mSereneAI: {result}\033[0m")

if __name__ == "__main__":
    #route_query("I'm feeling down today")
    while True:
        user_input = input("You're chatting with SereneAI (type 'exit' to quit): ")
        if user_input.lower() == "exit":
            break
        route_query(user_input)
