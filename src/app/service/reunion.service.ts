import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reunion } from '../models/reunion';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Reunion[]> {
    return this.http.get<Reunion[]>(`${this.apiUrl}/encadrement/reunion`);
  }

  public getOne(id : Number) : Observable<Reunion> {
    return this.http.get<Reunion>(`${this.apiUrl}/encadrement/reunion/${id}`);
  }

  public postOne(depense : Reunion) : Observable<Reunion> {
    return this.http.post<Reunion>(`${this.apiUrl}/encadrement/reunion`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/encadrement/reunion/${id}`); 
  }
}
