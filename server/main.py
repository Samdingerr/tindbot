from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Tillat frontend å snakke med API (nødvendig for senere)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DEEPSEEK_URL = "https://api.deepseek.com/v1/chat/completions"
API_KEY = os.getenv("DEEPSEEK_API_KEY")

class ChatInput(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "TindBot backend is running!"}

@app.post("/chat")
async def chat(input: ChatInput):
    user_message = input.message

    # 📄 Les inn Dr. Dropin sin FAQ som kontekst
    with open("drdropin.txt", "r", encoding="utf-8") as f:
        kundedata = f.read()

    prompt = [
        {
            "role": "system",
            "content": f"""
    Du er en hjelpsom, tydelig og kortfattet chatbot for Dr. Dropin.

    Du skal kun svare på spørsmål relatert til tjenestene, åpningstidene, timebestilling og annen informasjon som finnes i teksten nedenfor.

    Hvis brukeren spør om noe som ikke har med Dr. Dropin å gjøre, skal du si:
    "Beklager, jeg kan kun svare på spørsmål relatert til Dr. Dropin."

    Svar så kort og konsist som mulig – helst én setning.

    Her er informasjonen du har fått tilgang til:
    {kundedata}
    """
        },
        {
            "role": "user",
            "content": user_message
        }
    ]

    payload = {
        "model": "deepseek-chat",
        "messages": prompt
    }

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(DEEPSEEK_URL, headers=headers, json=payload)
    return response.json()
