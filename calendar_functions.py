from gcsa.google_calendar import GoogleCalendar as gc
from beautiful_date import *
from datetime import datetime
from gcsa.event import Event
from groq import Groq
import json
from dotenv import load_dotenv
import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
model = 'llama3-groq-70b-8192-tool-use-preview'
calendar = gc(credentials_path='./auth/cyprien_credentials.json')

def list_events(query, time_min, time_max):
    """
    Retrieves relevant events from the Google Calendar and returns them as a list

    Args:
        query (str): Search text to filter events.
        time_min (str): Start date and time in ISO format.
        time_max (str): End date and time in ISO format.

    Returns:
        list: List of event information.
    """
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
    print("✅ Events listed")
    return events

def create_event(title, start, end):
    """
    Creates a new event in the Google Calendar.

    Args:
        title (str): Title of the event.
        start (str): Start date and time in ISO format.
        end (str): End date and time in ISO format.

    Returns:
        str: Confirmation message.
    """
    try:
        start = datetime.fromisoformat(start)
        end = datetime.fromisoformat(end)
        new_event = Event(title, start=start, end=end)
        calendar.add_event(new_event)
        print("✅ New event added")
        return
    except Exception as e:
        print(f"❌ Failed to add event: {str(e)}")
        return

def delete_event(event_id):
    """
    Deletes an event from the Google Calendar by its ID.

    Args:
        event_id (str): ID of the event to delete.

    Returns:
        str: Confirmation message.
    """
    try:
        calendar.delete_event(event_id)
        print("✅ Event has been deleted.")
    except Exception as e:
        print(f"❌ Failed to delete event: {str(e)}")

def llm_edit_calendar(prompt):
    messages = [
        {
            "role": "system",
            "content": "You are a calendar assistant. Use the available functions to manage calendar events: create_event, delete_event, list_events.",
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
    return

if __name__ == "__main__":
    llm_edit_calendar("show all events")
