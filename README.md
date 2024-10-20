# Serene AI - Personal Wellness Coach

<div align="center">
  <img src="https://github.com/user-attachments/assets/dc033bd2-1f7e-4d27-803a-0d48d5cf1707" alt="logo" width="200"/>
</div>

Serene AI is a voice-to-voice web application designed to help users manage their mental well-being and productivity through personalized interactions. Serene listens to users' thoughts, emotions, and concerns, and responds with thoughtful advice and actions to reduce stress, manage schedules, and track emotional trends over time.

Developed for CalHacks 2024 at UC Berkeley, Serene AI integrates a custom AI model with emotional sentiment tracking and productivity management tools.

## Features
- **Voice-to-Voice Interaction**: Users can speak directly to Serene using the VAPI API, and Serene responds with personalized spoken dialogue.
- **Custom LLM**: Powered by a custom Large Language Model (LLM) using Groq and OpenAI, Serene generates context-aware responses based on user input.
- **Multi-Agent Framework**: Serene AI integrates with Google Calendar and Gmail, allowing it to:
  - Retrieve and manage events and emails.
  - Create or modify calendar events and send emails.
  - Relieve stress by adjusting schedules based on user preferences and emotional state.
- **Sentiment Tracking**: Tracks user sentiment over time, adjusting responses to improve personalization based on emotional patterns.
- **Trends and Insights**: Users can view their emotional trends over time, with visualizations of:
  - Mood scores/magnitudes across conversations.
  - Top emotions felt and their frequency.
  - Well-being insights over a month.

## Tech Stack
### Frontend:
- **React**: Web app interface.
- **Chart.js**: Visualizing trends and emotional data.
- **VAPI API**: Speech-to-text and text-to-speech interactions.

### Backend:
- **Flask**: To expose the custom LLM and manage API interactions.
- **Python**: For AI agent creation and overall backend logic.

### AI & Data:
- **Custom LLM**: Built using Groq and OpenAI for processing user input and generating responses.
- **Hume AI**: For advanced emotional sentiment analysis.
- **ChromaDB**: For storing conversation history, creating a knowledge base, and holding sentiment data.
- **Multi-Agent Functionality**: Allows us to control and edit your calendar or inbox directly through text and voice

## Setup and Installation

### Prerequisites
- Python 3.8 or higher
- Node.js (v14 or later)
- API keys for VAPI API, Google Calendar, Gmail, Hume AI, and OpenAI.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/serene-ai.git
    cd SereneAI
    ```

2. **Install backend dependencies** (Flask, AI models, and other Python packages):
    ```bash
    pip install -r backend/requirements.txt
    ```

3. **Install frontend dependencies** (React app):
    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables for API keys** (create a `.env` file in both `backend` and `frontend`):
    ```bash
    VAPI_API_KEY=your_vapi_api_key
    GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key
    GMAIL_API_KEY=your_gmail_api_key
    HUME_AI_API_KEY=your_hume_ai_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

### Running the Application

1. **Start the Flask backend**:
    ```bash
    cd backend
    flask run
    ```

2. **Start the React frontend**:
    ```bash
    cd frontend
    npm start
    ```

3. **Access the app in your browser**:
    ```
    http://localhost:3000
    ```


## Usage
- **Conversation**: Speak directly to Serene about your current feelings, stress levels, or concerns. Serene will analyze the input and respond with advice or tips. For example, you can say:
  - "I have an interview tomorrow, and I feel anxious. Can you help me calm down?"
  - "I have a presentation next week, but I get really nervous when public speaking. What can I do to prepare?"
  - "I’ve been feeling overwhelmed lately. Do you have any tips to reduce my stress?"
  - "I haven’t been sleeping well. Can you help me with some relaxation techniques before bed?"
  - "I’m feeling a bit down today. Can we talk about ways to lift my mood?"
- **Productivity**: Ask Serene to manage your calendar or emails. For example, you can say:
  - "What's on my schedule for today?"
  - "Cancel my meeting at 3 PM."
  - "Send an email to [recipient] about rescheduling."
- **Trends**: Track your emotional trends over time on the trends page, where you can view:
  - Monthly mood scores.
  - Most frequent emotions.
  - Sentiment analysis over conversations.

## Roadmap
- Integration with additional productivity tools (task management apps, to-do lists).
- Enhanced mood prediction and real-time emotional analysis using deep learning models.
- Expanding language support for voice interactions.
- Incorporation of wellness activities like guided meditations and breathing exercises based on emotional state.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- **VAPI API** for enabling seamless voice interaction.
- **Hume AI** for emotional sentiment analysis.
- **Google Cloud** for Calendar and Gmail API services.
- **OpenAI & Groq** for powering the LLMs and embedding models behind Serene AI.
- **ChromaDB** for enabling seamless memory storage and creation
