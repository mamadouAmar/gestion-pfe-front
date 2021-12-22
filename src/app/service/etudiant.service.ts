import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/etude/etudiant`);
  }

  public getOne(id : Number) : Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/etude/etudiant/${id}`);
  }

  public postOne(depense : Etudiant) : Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/etude/etudiant`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etude/etudiant/${id}`); 
  }
}
