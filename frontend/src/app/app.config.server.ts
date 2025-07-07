

// Config spécifique au backend FastAPI
export interface ServerEndpoints {
  getCave: string;
  addVin: string;
  deleteVin: string;
  updateVin: string;
  // ajoute d’autres endpoints ici si besoin
}

export interface ServerConfig {
  baseUrl: string;
  endpoints: ServerEndpoints;
}

// Valeur de la configuration serveur
export const ServerConfigValue: ServerConfig = {
  baseUrl: 'http://127.0.0.1:8000/api',// l’URL FastAPI
  endpoints: {
    getCave: '/cave',
    addVin: '/cave/add',
    deleteVin: '/cave/delete',
    updateVin: '/cave/update'
  }
};
