

// Config spécifique au backend FastAPI
export interface ServerEndpoints {
  getCave: string;
  addVin: string;
  deleteVin: string;
  // ajoute d’autres endpoints ici si besoin
}

export interface ServerConfig {
  baseUrl: string;
  endpoints: ServerEndpoints;
}

// Valeur de la configuration serveur
export const ServerConfigValue: ServerConfig = {
  baseUrl: 'http://localhost:8000',
  endpoints: {
    getCave: '/cave',
    addVin: '/cave/ajouter',
    deleteVin: '/cave/delete',
  }
};
