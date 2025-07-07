// src/app/services/vin.service.ts
import { Injectable, Inject } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app.config';
import { ServerConfigValue } from '../app.config.server';
import { Observable } from 'rxjs';
import { Vin } from '../models/vin.model';

@Injectable({ providedIn: 'root' })
export class VinService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}
  private base = ServerConfigValue.baseUrl;
    
  getCave(): Observable<Vin[]> {
    return this.http.get<Vin[]>(`${this.base}${ServerConfigValue.endpoints.getCave}`);
  }

  modifierVin(nom: string, vin: Vin): Observable<Vin> {
    return this.http.put<Vin>(`${this.base}${ServerConfigValue.endpoints.updateVin}/${encodeURIComponent(nom)}`, vin);
  }
  ajouterVin(vin: Vin): Observable<any> {
    return this.http.post(`${this.base}${ServerConfigValue.endpoints.addVin}`, vin);
  }
  supprimerVin(vin: Vin): Observable<any> {
    return this.http.delete(`${this.base}${ServerConfigValue.endpoints.deleteVin}/${vin.nom}`);
  }
}
