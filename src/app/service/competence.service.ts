import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competence } from '../models/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Competence[]> {
    return this.http.get<Competence[]>(`${this.apiUrl}/etude/competence`);
  }

  public getOne(id : Number) : Observable<Competence> {
    return this.http.get<Competence>(`${this.apiUrl}/etude/competence/${id}`);
  }

  public postOne(depense : Competence) : Observable<Competence> {
    return this.http.post<Competence>(`${this.apiUrl}/etude/competence`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etude/competence/${id}`); 
  }

}
