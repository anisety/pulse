import spacy

# Load the spaCy model
try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    print("Downloading language model for the first time. This may take a few minutes.")
    from spacy.cli import download
    download("en_core_web_sm")
    nlp = spacy.load("en_core_web_sm")


def extract_keywords(text: str):
    """
    Extracts keywords and entities from the given text.
    """
    doc = nlp(text)
    keywords = [token.text for token in doc if not token.is_stop and not token.is_punct]
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    return {"keywords": keywords, "entities": entities}
