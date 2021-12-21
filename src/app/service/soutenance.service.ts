import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Soutenance } from '../models/soutenance';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Soutenance[]> {
    return this.http.get<Soutenance[]>(`${this.apiUrl}/soutenance/soutenance`);
  }

  public getOne(id : Number) : Observable<Soutenance> {
    return this.http.get<Soutenance>(`${this.apiUrl}/soutenance/soutenance/${id}`);
  }

  public postOne(depense : Soutenance) : Observable<Soutenance> {
    return this.http.post<Soutenance>(`${this.apiUrl}/soutenance/soutenance`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/soutenance/soutenance/${id}`); 
  }
}
