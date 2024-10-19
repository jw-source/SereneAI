import os
from groq import Groq
from dotenv import load_dotenv

# Initialize the Groq client
load_dotenv()
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

def generate_therapist_response(text, emotions):
    # Define the therapist-like prompt structure
    prompt = f"Generate a response a therapist would give to '{text}', considering the user is feeling the following emotions with their respective magnitudes: '{emotions}'"

    try:
        # Call the Groq API using a suitable model (replace 'llama3-8b-8192' with your preferred model)
        response = client.chat.completions.create(
            model="llama3-8b-8192",  # You can adjust the model depending on the performance you need
            messages=[
                {"role": "system", "content": "You are a helpful and empathetic therapist."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=200  # Adjust based on how long you want the response
        )

        # Extract the generated response
        return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    therapist_response = generate_therapist_response("hello im feeling down today", "sad ")
    print(therapist_response)
    
