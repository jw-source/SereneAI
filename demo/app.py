import os
import json
from flask import Flask, request, Response
from groq import Groq
from dotenv import load_dotenv

# Initialize the Flask app
app = Flask(__name__)

# Load environment variables
load_dotenv()

# Initialize the Groq client
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY")
)

def generate_therapist_response(user_message):
    try:
        # Call the Groq API with streaming enabled
        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages = user_message,
            max_tokens=200, stream=True
        )

        # Create a generator to stream the response chunks
        def event_stream():
            try:
                for chunk in response:
                    # Stream each chunk as stringified JSON
                    yield f"data: {json.dumps(chunk.model_dump())}\n\n"
                yield "data: [DONE]\n\n"
            except Exception as e:
                yield f"data: {json.dumps({'error': str(e)})}\n\n"

        return event_stream()

    except Exception as e:
        return f"Error: {str(e)}"

@app.route("/chat/completions", methods=["POST"])
def generate_response():
    data = request.get_json()

    # Extract the user input from the JSON payload
    try:
        messages = data.get("messages", [])

        # Generate the therapist response stream
        response_stream = generate_therapist_response(messages)

        # Return the streamed response as text/event-stream
        return Response(response_stream, mimetype="text/event-stream")

    except Exception as e:
        return Response(f"data: {json.dumps({'error': str(e)})}\n\n", mimetype="text/event-stream")

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Run the Flask app
