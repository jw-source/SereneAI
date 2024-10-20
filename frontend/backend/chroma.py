import chromadb
import chromadb.utils.embedding_functions as embedding_functions
import os
from dotenv import load_dotenv

load_dotenv()

openai_ef = embedding_functions.OpenAIEmbeddingFunction(
                api_key=os.getenv("OPENAI_API_KEY"),
                model_name="text-embedding-3-small"
            )

chroma_client = chromadb.Client()

def add_chat_history(new_message):
    collection = chroma_client.get_or_create_collection(name="chat_history", embedding_function=openai_ef)
    doc_count = collection.count()
    collection.upsert(
        documents=[new_message],
        ids=["id" + str(doc_count + 1)]
    )

def search_chat_history(query):
    collection = chroma_client.get_or_create_collection(name="chat_history", embedding_function=openai_ef)
    results = collection.query(
        query_texts=[query],
        n_results=5
    )
    return results["documents"]

def add_calendar_history(new_event):
    collection = chroma_client.get_or_create_collection(name="calendar_history", embedding_function=openai_ef)
    doc_count = collection.count()
    collection.upsert(
        documents=[new_event],
        ids=["id" + str(doc_count + 1)]
    )

def search_calendar_history(query):
    collection = chroma_client.get_or_create_collection(name="calendar_history", embedding_function=openai_ef)
    results = collection.query(
        query_texts=[query],
        n_results=5
    )
    return results["documents"]

def add_mail_history(new_message):
    collection = chroma_client.get_or_create_collection(name="mail_history", embedding_function=openai_ef)
    doc_count = collection.count()
    collection.upsert(
        documents=[new_message],
        ids=["id" + str(doc_count + 1)]
    )

def search_mail_history(query):
    collection = chroma_client.get_or_create_collection(name="mail_history", embedding_function=openai_ef)
    results = collection.query(
        query_texts=[query],
        n_results=5
    )
    return results["documents"]
