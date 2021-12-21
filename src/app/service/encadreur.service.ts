import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Encadreur } from '../models/encadreur';

@Injectable({
  providedIn: 'root'
})
export class EncadreurService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Encadreur[]> {
    return this.http.get<Encadreur[]>(`${this.apiUrl}/etude/encadreur`);
  }

  public getOne(id : Number) : Observable<Encadreur> {
    return this.http.get<Encadreur>(`${this.apiUrl}/etude/encadreur/${id}`);
  }

  public postOne(depense : Encadreur) : Observable<Encadreur> {
    return this.http.post<Encadreur>(`${this.apiUrl}/etude/encadreur`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etude/encadreur/${id}`); 
  }
}
