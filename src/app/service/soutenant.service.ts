import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Soutenant } from '../models/soutenant';

@Injectable({
  providedIn: 'root'
})
export class SoutenantService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Soutenant[]> {
    return this.http.get<Soutenant[]>(`${this.apiUrl}/etude/soutenant`);
  }

  public getOne(id : Number) : Observable<Soutenant> {
    return this.http.get<Soutenant>(`${this.apiUrl}/etude/soutenant/${id}`);
  }

  public postOne(depense : Soutenant) : Observable<Soutenant> {
    return this.http.post<Soutenant>(`${this.apiUrl}/etude/soutenant`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etude/soutenant/${id}`); 
  }
}
