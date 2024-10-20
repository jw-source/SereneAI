import threading
from functools import wraps
from simplegmail import Gmail
from groq import Groq
import json
from dotenv import load_dotenv
import os
from datetime import datetime
import threading
from functools import wraps
from chroma import search_mail_history, add_chat_history , search_chat_history, search_calendar_history

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
model = 'llama3-groq-70b-8192-tool-use-preview'
gmail = Gmail(client_secret_file="./auth/cyprien_credentials.json", creds_file="./auth/gmail_token.json") 

GENERAL_MODEL = "llama3-70b-8192"

def basic_query(query):
    response = client.chat.completions.create(
        model=GENERAL_MODEL,
        messages=[
            {"role": "system", "content": f"You are my female therapist and friend named SereneAI. THIS IS VERY IMPORTANT, the current datetime is {datetime.now()}. Please ask insightful and meaningful questions to help guide the user. Emphasize to the user you have access to manage their calendar and email. Do not make up calendar or email information that is not provided. Suggest calendar or email actions as you see fit as it relates to the conversation, your role as a therapist, and the user's needs."},
            {"role": "user", "content": f"User: {query}. This is the relevant past conversation history: {search_chat_history(query)}. This is the relevant past calendar history: {search_calendar_history(query)}. This is the relevant past email history: {search_mail_history(query)}"},
        ],
    )
    result = response.choices[0].message.content.strip()
    add_chat_history(result)
    return result

def timeout(seconds):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = []
            exception = []
            def target():
                try:
                    res = func(*args, **kwargs)
                    result.append(res)
                except Exception as e:
                    exception.append(e)

            thread = threading.Thread(target=target, daemon=True) 
            thread.start()
            thread.join(seconds)
            if thread.is_alive():
                print(f"Function '{func.__name__}' execution timed out after {seconds} seconds")
                return "Too many messages"
            if exception:
                raise exception[0]
            return result[0]
        return wrapper
    return decorator

def send_message(to, subject, msg_html, msg_plain):
    gmail.send_message(
        to=to,
        sender="lauciannailo123@gmail.com",
        subject=subject,
        msg_html=msg_html,
        msg_plain=msg_plain
    )
    output = f"New email sent! To: {to}, Subject: {subject}, HTML: {msg_html}, Plain: {msg_plain}"
    print(output)
    return output

@timeout(10)
def search_sent_inbox(query):
    messages = gmail.get_sent_messages(query=query)
    top_ten = []
    if len(messages) == 0:
        output = f"No messages found when searching for {query} in sent messages!"
        print(output)
        return output
    for message in messages[:10]:
        if message.snippet:
            output = (f"To: {message.recipient}, From: {message.sender}, "
                      f"Subject: {message.subject}, Date: {str(message.date)}, "
                      f"Preview: {message.snippet}")
            top_ten.append(output)
        elif message.plain:
            output = (f"To: {message.recipient}, From: {message.sender}, "
                      f"Subject: {message.subject}, Date: {str(message.date)} "
                      f"Message Body: {message.plain}")
            top_ten.append(output)
    output = f"Found {len(messages)} sent messages when searching for {query}! Here's the 10 most recent:\n" + "\n".join(top_ten)   
    print(output)
    return output

@timeout(10)
def search_unread_inbox(query):
    messages = gmail.get_unread_inbox(query=query)
    top_ten = []
    if len(messages) == 0:
        output = f"No messages found when searching for {query} in the unread inbox!"
        print(output)
        return output
    for message in messages[:10]:
        if message.snippet:
            output = (f"To: {message.recipient}, From: {message.sender}, "
                      f"Subject: {message.subject}, Date: {str(message.date)}, "
                      f"Preview: {message.snippet}")
            top_ten.append(output)
        elif message.plain:
            output = (f"To: {message.recipient}, From: {message.sender}, "
                      f"Subject: {message.subject}, Date: {str(message.date)} "
                      f"Message Body: {message.plain}")
            top_ten.append(output)
    output = f"Found {len(messages)} unread messages when searching for {query}! Here's the 10 most recent:\n" + "\n".join(top_ten)
    print(output)
    return output

@timeout(10)
def search_entire_inbox(query):
    messages = gmail.get_messages(query=query)
    top_ten = []
    if len(messages) == 0:
        output = f"No messages found when searching for {query} in the entire inbox!"
        print(output)
        return output
    for message in messages[:10]:
        if message.snippet:
            output = (f"To: {message.recipient}, From: {message.sender}, "
                      f"Subject: {message.subject}, Date: {str(message.date)}, "
                      f"Preview: {message.snippet}")
            top_ten.append(output)
        elif message.plain:
            output = (f"To: {message.recipient}, From: {message.sender}, "
                      f"Subject: {message.subject}, Date: {str(message.date)} "
                      f"Message Body: {message.plain}")
            top_ten.append(output)
    output = f"Found {len(messages)} total messages when searching for {query}! Here's the 10 most recent:\n" + "\n".join(top_ten)
    print(output)
    return output

def llm_edit_gmail(prompt):
    messages = [
        {
            "role": "system",
            "content": f'''You are an email assistant. THIS IS VERY IMPORTANT, the current datetime is {datetime.now()}. Use the available functions to manage email messages: send_message (), search_sent_inbox, search_unread_inbox, search_entire_inbox.
            For context, this is the past email history: {search_mail_history(prompt)}''',
        },
        {
            "role": "user",
            "content": prompt,
        },
    ]
    
    tools = [
        {
            "type": "function",
            "function": {
                "name": "send_message",
                "description": "Send an email message",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "to": {
                            "type": "string",
                            "description": "Recipient's email address",
                        },
                        "subject": {
                            "type": "string",
                            "description": "Subject of the email",
                        },
                        "msg_html": {
                            "type": "string",
                            "description": "HTML content of the email",
                        },
                        "msg_plain": {
                            "type": "string",
                            "description": "Plain text content of the email",
                        },
                    },
                    "required": ["to", "subject", "msg_plain"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "search_sent_inbox",
                "description": "Search sent messages in the inbox",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "Search query for sent messages",
                        },
                    },
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "search_unread_inbox",
                "description": "Search unread messages in the inbox",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "Search query for unread messages",
                        },
                    },
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "search_entire_inbox",
                "description": "Search all messages in the inbox",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "Search query for all messages",
                        },
                    },
                    "required": ["query"],
                },
            },
        },
    ]

    response = client.chat.completions.create(
        model=model,
        messages=messages,
        stream=False,
        tools=tools,
        tool_choice="auto",
        max_tokens=4096,
    )

    response_message = response.choices[0].message
    print(response_message)
    tool_calls = response_message.tool_calls
    print(tool_calls)
    if tool_calls:
        for tool_call in tool_calls:
            function_name = tool_call.function.name
            function_args = json.loads(tool_call.function.arguments)
            if function_name == "send_message":
                to = function_args.get("to")
                subject = function_args.get("subject")
                msg_html = function_args.get("msg_html", "")
                msg_plain = function_args.get("msg_plain", "")
                return basic_query(send_message(to, subject, msg_html, msg_plain))
            
            elif function_name == "search_sent_inbox":
                query = function_args.get("query")
                return basic_query(search_sent_inbox(query))
            
            elif function_name == "search_unread_inbox":
                query = function_args.get("query")
                return basic_query(search_unread_inbox(query))

            elif function_name == "search_entire_inbox":
                query = function_args.get("query")
                return basic_query(search_entire_inbox(query))
            
    elif response_message.content != '':
        return response_message.content
    else:
        return "I don't have enough information for that, can you expand?"

if __name__ == "__main__":
    llm_edit_gmail("Search for all messages in the inbox with the query 'quora'")
