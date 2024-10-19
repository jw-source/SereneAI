from gcsa.google_calendar import GoogleCalendar as gc
from beautiful_date import *
from datetime import datetime
from gcsa.event import Event
from groq import Groq
import json
from dotenv import load_dotenv
import os
from chroma import search_calendar_history

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
model = 'llama3-groq-70b-8192-tool-use-preview'
calendar = gc(credentials_path='./auth/cyprien_credentials.json')

def list_events(query, time_min, time_max):
    events = []
    if time_min is not None and time_max is not None:
        time_min = datetime.fromisoformat(time_min)
        time_max = datetime.fromisoformat(time_max)
        if query is not None:
            for event in calendar.get_events(query=query, time_min=time_min, time_max=time_max):
                info = f"ID: {event.id}, Title: {event}"
                events.append(info)
        else:
            for event in calendar.get_events(time_min=time_min, time_max=time_max):
                info = f"ID: {event.id}, Title: {event}"
                events.append(info)
    else:
        if query is not None:
            for event in calendar.get_events(query=query):
                info = f"ID: {event.id}, Title: {event}"
                events.append(info)
        else:
            for event in calendar.get_events():
                info = f"ID: {event.id}, Title: {event}"
                events.append(info)
    output = f"{len(events)} events found! " + "\n".join(events)
    print(output)
    return output

def create_event(title, start, end):
    start = datetime.fromisoformat(start)
    end = datetime.fromisoformat(end)
    new_event = Event(title, start=start, end=end)
    calendar.add_event(new_event)
    output = "New event added! " + f"Title: {title}, Start: {start}, End: {end}"
    print(output)
    return output

def delete_event(event_id):
    calendar.delete_event(event_id)
    output = f"Event with ID {event_id} deleted!"
    print(output)
    return output

def llm_edit_calendar(prompt):
    current_cal = list_events(None, None, None)
    messages = [
        {
            "role": "system",
            "content": f'''You are a calendar assistant. THIS IS VERY IMPORTANT, the current datetime is {datetime.now()}. Use the available functions to manage calendar events: create_event, delete_event, list_events.
            For context, this is the current calendar state: {current_cal}. This is the past calendar history: {search_calendar_history(prompt)}''',
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
                "name": "create_event",
                "description": "Create a new calendar event",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": "string",
                            "description": "Title of the event",
                        },
                        "start": {
                            "type": "string",
                            "description": "Start date and time of the event in ISO format",
                        },
                        "end": {
                            "type": "string",
                            "description": "End date and time of the event in ISO format",
                        },
                    },
                    "required": ["title", "start", "end"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "delete_event",
                "description": "Delete a calendar event",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "event_id": {
                            "type": "string",
                            "description": "ID of the event to delete",
                        },
                    },
                    "required": ["event_id"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "list_events",
                "description": "List relevant calendar events",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "Search text to filter events",
                        },
                        "time_min": {
                            "type": "string",
                            "description": "Start date and time in ISO format",
                        },
                        "time_max": {
                            "type": "string",
                            "description": "End date and time in ISO format",
                        },
                    },
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
    if tool_calls is None:
        print("No tool calls found")
        return
    for tool_call in tool_calls:
        function_name = tool_call.function.name
        function_args = json.loads(tool_call.function.arguments)
        if function_name == "create_event":
            title = function_args.get("title")
            start = function_args.get("start")
            end = function_args.get("end")
            create_event(title, start, end)
        elif function_name == "delete_event":
            event_id = function_args.get("event_id")
            delete_event(event_id)
        elif function_name == "list_events":
            query = function_args.get("query")
            time_min = function_args.get("time_min")
            time_max = function_args.get("time_max")
            list_events(query, time_min, time_max)
    return "No tool calls found"

if __name__ == "__main__":
    llm_edit_calendar("can you delete my burger king event")
