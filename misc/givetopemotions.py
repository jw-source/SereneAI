import asyncio
from hume import AsyncHumeClient
from hume.expression_measurement.stream import Config
from hume.expression_measurement.stream.socket_client import StreamConnectOptions
from hume.expression_measurement.stream.types import StreamLanguage


samples = [
    "hello there i am feeling a little tiny bit sad", 
    "yes no yes no"
]

async def main():
    client = AsyncHumeClient(api_key="3v4DChnAqtBLBnQzgD8VROM8nUmCLhhVYfw5V5EWXVrlP1ub")

    model_config = Config(language=StreamLanguage())

    stream_options = StreamConnectOptions(config=model_config)

    async with client.expression_measurement.stream.connect(options=stream_options) as socket:
        for sample in samples:
            result = await socket.send_text(sample)
            print(result.language.predictions[0].emotions)

if __name__ == "__main__":
    asyncio.run(main())
