// src/app/services/vin.service.ts
import { Injectable, Inject } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app.config';

@Injectable({ providedIn: 'root' })
export class VinService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  getCave() {
    return this.http.get(`${this.config.apiBaseUrl}/cave`);
  }

  ajouterVin(vin: any) {
    return this.http.post(
      `${this.config.apiBaseUrl}/ajouter`,
      vin
    );
  }
}
