from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Vin(BaseModel):
    nom: str
    annee: int
    type: str
    quantite: int

cave = [
    {"nom": "Château Margaux", "annee": 2015, "type": "Rouge", "quantite": 6},
    {"nom": "Pouilly-Fumé", "annee": 2020, "type": "Blanc", "quantite": 3}
]

@app.get("/")
def root():
    return {"message": "Assistant cave à vin actif !"}

@app.get("/cave")
def liste_cave():
    return cave

@app.post("/ajouter")
def ajouter_vin(vin: Vin):
    cave.append(vin.dict())
    return {"message": "Vin ajouté avec succès", "cave": cave}