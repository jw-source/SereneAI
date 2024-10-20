import os
import json
from flask import Flask, request, Response
from groq import Groq
from dotenv import load_dotenv
from calendar_functions import llm_edit_calendar
from mail_functions import llm_edit_gmail
from datetime import datetime
from chroma import add_chat_history, search_chat_history, add_calendar_history, add_mail_history, search_calendar_history, search_mail_history

# Initialize the Flask app
app = Flask(__name__)

# Load environment variables
load_dotenv()

# Initialize the Groq client
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

ROUTING_MODEL = "llama3-70b-8192"
TOOL_USE_MODEL = "llama3-groq-70b-8192-tool-use-preview"
GENERAL_MODEL = "llama3-70b-8192"

def basic_query(messages):
    print(messages)
    user_message = " ".join([messages[-1]['content'] for msg in messages if msg['role'] == 'user'])
    response = client.chat.completions.create(
        model=GENERAL_MODEL,
        messages=[
            {"role": "system", "content": f"You are my female therapist and friend named SereneAI. THIS IS VERY IMPORTANT, the current datetime is {datetime.now()}. Please ask insightful and meaningful questions to help guide the user. Emphasize to the user you have access to manage their calendar and email. Do not make up calendar or email information that is not provided. Suggest calendar or email actions as you see fit as it relates to the conversation, your role as a therapist, and the user's needs."},
            {"role": "user", "content": f"User: {user_message}. This is the relevant past conversation history: {search_chat_history(user_message)}. This is the relevant past calendar history: {search_calendar_history(user_message)}. This is the relevant past email history: {search_mail_history(user_message)}"},
        ],
    )
    result = response.choices[0].message.content.strip()
    add_chat_history(result)
    return result

def route_query(messages):
    routing_prompt = messages[-1]['content']
    routing_messages = [
        {"role": "system", "content": "You are a llm routing assistant. Determine if tools are needed based on the user query. If a calendar assistant is needed, return Calendar. If a mail assistant is needed, return Mail."},
        {"role": "user", "content": routing_prompt},
    ]
    response = client.chat.completions.create(
        model=ROUTING_MODEL,
        messages=routing_messages,
    )
    routing_decision = response.choices[0].message.content.strip()
    if "Calendar" in routing_decision:
        print("Calendar Called")
        result = llm_edit_calendar(routing_prompt)
        if result != None:

            add_calendar_history(result)
    elif "Mail" in routing_decision:
        print("Mail Called")
        result = llm_edit_gmail(routing_prompt)
        if result != None:
            add_mail_history(result)
    else:
        result = basic_query(messages)
    return result

def generate_therapist_response(messages):
    try:
        # Process the messages and generate a response
        print(messages)
        response = route_query(messages)

        # Create a generator to stream the response
        def event_stream():
            try:
                # Split the response into words and yield them as separate chunks
                words = response.split()
                for word in words:
                    chunk = {
                        "choices": [
                            {
                                "delta": {"content": word + " "},
                                "finish_reason": None,
                                "index": 0
                            }
                        ],
                        "created": int(datetime.now().timestamp()),
                        "model": GENERAL_MODEL,
                        "object": "chat.completion.chunk"
                    }
                    yield f"data: {json.dumps(chunk)}\n\n"
               
                # Send the final chunk
                final_chunk = {
                    "choices": [
                        {
                            "delta": {},
                            "finish_reason": "stop",
                            "index": 0
                        }
                    ],
                    "created": int(datetime.now().timestamp()),
                    "model": GENERAL_MODEL,
                    "object": "chat.completion.chunk"
                }
                yield f"data: {json.dumps(final_chunk)}\n\n"
                yield "data: [DONE]\n\n"
            except Exception as e:
                yield f"data: {json.dumps({'error': str(e)})}\n\n"

        return event_stream()

    except Exception as e:
        return f"Error: {str(e)}"

@app.route("/chat/completions", methods=["POST"])
def generate_response():
    data = request.get_json()

    try:
        messages = data.get("messages", [])

        # Generate the therapist response stream
        response_stream = generate_therapist_response(messages)
        print(response_stream)

        # Return the streamed response as text/event-stream
        return Response(response_stream, mimetype="text/event-stream")

    except Exception as e:
        return Response(f"data: {json.dumps({'error': str(e)})}\n\n", mimetype="text/event-stream")

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Run the Flask app