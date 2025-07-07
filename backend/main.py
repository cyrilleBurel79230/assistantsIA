from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List
import json
import os

app = FastAPI()


# Activer le CORS pour permettre à Angular d'accéder à l'API
origins = [
    "http://localhost:4200",
    "http://127.0.0.1:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



DATA_FILE = 'data/caveavin.json'


class Vin(BaseModel):
    nom: str = Field(..., min_length=1)
    annee: int
    type: str
    quantite: int


def read_data() -> List[Vin]:
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


def write_data(data: List[dict]) -> None:
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


@app.get("/api/cave", response_model=List[Vin])
def get_cave():
    return read_data()


@app.post("/api/cave/add", response_model=Vin)
def add_vin(vin: Vin):
    data = read_data()
    # Optionnel : vérifier doublon par nom+annee
    data.append(vin.dict())
    write_data(data)
    return vin


@app.put("/api/cave/update/{nom}", response_model=Vin)
def update_vin(nom: str, vin_modifie: Vin):
    data = read_data()
    updated = False
    for i, vin in enumerate(data):
        if vin["nom"] == nom:
            data[i] = vin_modifie.dict()
            updated = True
            break
    if not updated:
        raise HTTPException(status_code=404, detail="Vin non trouvé")
    write_data(data)
    return vin_modifie

@app.delete("/api/cave/delete/{nom}")
def delete_vin(nom: str):
    data = read_data()
    new_data = [v for v in data if v['nom'] != nom]
    if len(new_data) == len(data):
        raise HTTPException(status_code=404, detail="Vin non trouvé")
    write_data(new_data)
    return {"message": f"Vin '{nom}' supprimé"}