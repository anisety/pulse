from fastapi import APIRouter
import pandas as pd
from io import StringIO

router = APIRouter()

@router.get("/data")
def get_data():
    # In a real application, you would fetch this data from a database
    # or another source.
    csv_data = "category,value\nAlpha,30\nBeta,40\nGamma,50"
    data = pd.read_csv(StringIO(csv_data))
    return data.to_dict(orient="records")
