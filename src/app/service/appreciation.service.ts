import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evaluation } from '../models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class AppreciationService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/soutenance/appreciation`);
  }

  public getOne(id : Number) : Observable<Evaluation> {
    return this.http.get<Evaluation>(`${this.apiUrl}/soutenance/appreciation/${id}`);
  }

  public postOne(depense : Evaluation) : Observable<Evaluation> {
    return this.http.post<Evaluation>(`${this.apiUrl}/soutenance/appreciation`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/soutenance/appreciation/${id}`); 
  }
}
