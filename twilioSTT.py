import asyncio
import os
from dotenv import load_dotenv
from hume.client import AsyncHumeClient
from hume.empathic_voice.chat.socket_client import ChatConnectOptions
from hume.empathic_voice.chat.types import SubscribeEvent
from hume.expression_measurement.stream import Config
from hume.expression_measurement.stream.socket_client import StreamConnectOptions
from hume.expression_measurement.stream.types import StreamLanguage

# Load API keys from .env file
load_dotenv()

# Hume API credentials
api_key = "3v4DChnAqtBLBnQzgD8VROM8nUmCLhhVYfw5V5EWXVrlP1ub"
secret_key = "EJ3k24PMSK6jmld35F6ULK2vC0hj1xlAfVufPOmZHiA0ebmsPj0wJjdtrb9uY2tN"
config_id = "a8a2528b-020b-46ca-bddf-59cc2595af39"  # Config ID for your ASR model

# Class to manage WebSocket connection for speech-to-text transcription
class WebSocketInterface:
    def __init__(self):
        self.transcription_text = ""  # Stores the transcribed text

    # Called when WebSocket opens
    def on_open(self):
        print("WebSocket connection opened")

    # Called when receiving transcription from Hume AI
    def on_message(self, message: SubscribeEvent):
        if hasattr(message, 'transcription'):
            self.transcription_text = message.transcription
            print(f"Transcription received: {self.transcription_text}")
            # Now that we have transcription, pass it to emotion analysis
            asyncio.create_task(self.analyze_emotions(self.transcription_text))

    async def analyze_emotions(self, transcription):
        # Initialize the Hume client for emotion analysis
        client = AsyncHumeClient(api_key=api_key)
        model_config = Config(language=StreamLanguage())
        stream_options = StreamConnectOptions(config=model_config)
        
        async with client.expression_measurement.stream.connect(options=stream_options) as socket:
            result = await socket.send_text(transcription)
            emotions = result.language.predictions[0]['emotions']
            print(f"Emotion analysis result: {emotions}")

    # Called when WebSocket closes
    def on_close(self):
        print("WebSocket connection closed")

    # Called when there is an error
    def on_error(self, error):
        print(f"Error occurred: {error}")

# Main function to connect to Hume for both transcription and emotion analysis
async def main():
    # Initialize the Hume client for transcription (ASR)
    client = AsyncHumeClient(api_key=api_key)

    # Set WebSocket connection options
    options = ChatConnectOptions(config_id=config_id, secret_key=secret_key)

    # Create WebSocket interface instance
    websocket_interface = WebSocketInterface()

    # Establish WebSocket connection with Hume API for transcription
    async with client.empathic_voice.chat.connect_with_callbacks(
        options=options,
        on_open=websocket_interface.on_open,
        on_message=websocket_interface.on_message,
        on_close=websocket_interface.on_close,
        on_error=websocket_interface.on_error
    ) as socket:
        print("WebSocket connected. Listening for transcriptions...")

        # Keep the connection alive (adjust as needed)
        await asyncio.sleep(60)

# Run the WebSocket transcription and emotion analysis
if __name__ == "__main__":
    asyncio.run(main())
