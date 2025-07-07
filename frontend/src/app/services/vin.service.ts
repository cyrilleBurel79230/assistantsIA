import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../app.config.server';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinService {
  constructor(private http: HttpClient) {}

  getCave(): Observable<any> {
    return this.http.get(`${ServerConfig.baseUrl}${ServerConfig.endpoints.getCave}`);
  }

  ajouterVin(vin: any): Observable<any> {
    return this.http.post(`${ServerConfig.baseUrl}${ServerConfig.endpoints.addVin}`, vin);
  }
}
