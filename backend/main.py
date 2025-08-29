from fastapi import FastAPI
from .nlp.main import extract_keywords
from pydantic import BaseModel

class TextIn(BaseModel):
    text: str

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Pulse"}

@app.post("/extract")
def get_keywords(text_in: TextIn):
    return extract_keywords(text_in.text)