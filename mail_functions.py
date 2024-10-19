from simplegmail import Gmail
from groq import Groq
import json
from dotenv import load_dotenv
import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
model = 'llama3-groq-70b-8192-tool-use-preview'
gmail = Gmail(client_secret_file="./auth/cyprien_credentials.json", creds_file="./auth/gmail_token.json") 

def send_message(to, subject, msg_html, msg_plain):
    """
    Sends an email message using the Gmail API.

    Args:
        to (str): Recipient's email address.
        subject (str): Subject of the email.
        msg_html (str): HTML content of the email.
        msg_plain (str): Plain text content of the email.

    Returns:
        None
    """
    gmail.send_message(
        to=to,
        sender="lauciannailo123@gmail.com",
        subject=subject,
        msg_html=msg_html,
        msg_plain=msg_plain
    )
    print("✅ Email sent")

def search_sent_inbox(query):
    """
    Searches the sent messages in your Gmail account based on a query.

    Args:
        query (str): Search query for sent messages.

    Returns:
        None
    """
    messages = gmail.get_sent_messages(query=query)
    for message in messages:
        print("To: " + message.recipient)
        print("From: " + message.sender)
        print("Subject: " + message.subject)
        print("Date: " + str(message.date))
        if message.snippet:
            print("Preview: " + message.snippet)
        if message.plain:
            print("Message Body: " + message.plain)
    print(f"✅ Found {len(messages)} sent messages")

def search_unread_inbox(query):
    """
    Searches the unread messages in your Gmail inbox based on a query.

    Args:
        query (str): Search query for unread messages.

    Returns:
        None
    """
    messages = gmail.get_unread_inbox(query=query)
    for message in messages:
        print("To: " + message.recipient)
        print("From: " + message.sender)
        print("Subject: " + message.subject)
        print("Date: " + str(message.date))
        if message.snippet:
            print("Preview: " + message.snippet)
        if message.plain:
            print("Message Body: " + message.plain)
    print(f"✅ Found {len(messages)} unread messages")

def search_entire_inbox(query):
    """
    Searches all messages in your Gmail inbox based on a query.

    Args:
        query (str): Search query for all messages.

    Returns:
        None
    """
    messages = gmail.get_messages(query=query)
    for message in messages:
        print("To: " + message.recipient)
        print("From: " + message.sender)
        print("Subject: " + message.subject)
        print("Date: " + str(message.date))
        if message.snippet:
            print("Preview: " + message.snippet)
        if message.plain:
            print("Message Body: " + message.plain)
    print(f"✅ Found {len(messages)} total messages")

def llm_edit_gmail(prompt):
    """
    Interacts with the LLM to process the prompt and perform email actions using the available functions.

    Args:
        prompt (str): User prompt or instruction.

    Returns:
        None
    """
    messages = [
        {
            "role": "system",
            "content": "You are an email assistant. Use the available functions to manage email messages: send_message, search_sent_inbox, search_unread_inbox, search_entire_inbox.",
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
    tool_calls = response_message.tool_calls

    for tool_call in tool_calls:
        function_name = tool_call.function.name
        function_args = json.loads(tool_call.function.arguments)
        if function_name == "send_message":
            to = function_args.get("to")
            subject = function_args.get("subject")
            msg_html = function_args.get("msg_html", "")
            msg_plain = function_args.get("msg_plain", "")
            send_message(to, subject, msg_html, msg_plain)
        elif function_name == "search_sent_inbox":
            query = function_args.get("query")
            search_sent_inbox(query)
        elif function_name == "search_unread_inbox":
            query = function_args.get("query")
            search_unread_inbox(query)
        elif function_name == "search_entire_inbox":
            query = function_args.get("query")
            search_entire_inbox(query)
    return

if __name__ == "__main__":
    llm_edit_gmail("show all emails sent to shivumpandove@gmail.com")
