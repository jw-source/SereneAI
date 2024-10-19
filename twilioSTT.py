#measure emotion to produce metrics
#speech to text transcription
import asyncio
import os
from dotenv import load_dotenv
from hume.client import AsyncHumeClient
from hume.empathic_voice.chat.socket_client import ChatConnectOptions
from hume.empathic_voice.chat.types import SubscribeEvent

# Load API keys from .env file
load_dotenv()

# Hume API credentials
api_key = "3v4DChnAqtBLBnQzgD8VROM8nUmCLhhVYfw5V5EWXVrlP1ub"
secret_key = "EJ3k24PMSK6jmld35F6ULK2vC0hj1xlAfVufPOmZHiA0ebmsPj0wJjdtrb9uY2tN"
config_id = "a8a2528b-020b-46ca-bddf-59cc2595af39"  # Config ID for your ASR model

# Class to manage WebSocket connection
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

    # Called when WebSocket closes
    def on_close(self):
        print("WebSocket connection closed")

    # Called when there is an error
    def on_error(self, error):
        print(f"Error occurred: {error}")

# Main function to connect to Hume and transcribe audio
async def main():
    # Initialize the Hume client
    client = AsyncHumeClient(api_key=api_key)

    # Set WebSocket connection options
    options = ChatConnectOptions(config_id=config_id, secret_key=secret_key)

    # Create WebSocket interface instance
    websocket_interface = WebSocketInterface()

    # Establish WebSocket connection with Hume API
    async with client.empathic_voice.chat.connect_with_callbacks(
        options=options,
        on_open=websocket_interface.on_open,
        on_message=websocket_interface.on_message,
        on_close=websocket_interface.on_close,
        on_error=websocket_interface.on_error
    ) as socket:
        print("WebSocket connected. Listening for transcriptions...")

        # Keep the connection alive for 30 seconds (adjust as needed)
        await asyncio.sleep(30)

    # Print the final transcription
    print(f"Final Transcription: {websocket_interface.transcription_text}")

# Run the WebSocket transcription
asyncio.run(main())

#twiliooutgoing
#need to STT this 
#emotion analysis raw audio + emotion analysis STT produce weighted average




