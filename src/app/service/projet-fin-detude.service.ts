import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjetFinDetude } from '../models/projet-fin-detude';

@Injectable({
  providedIn: 'root'
})
export class ProjetFinDetudeService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<ProjetFinDetude[]> {
    return this.http.get<ProjetFinDetude[]>(`${this.apiUrl}/etude/ProjetFinDetudes`);
  }

  public getOne(id : Number) : Observable<ProjetFinDetude> {
    return this.http.get<ProjetFinDetude>(`${this.apiUrl}/etude/ProjetFinDetudes/${id}`);
  }

  public postOne(depense : ProjetFinDetude) : Observable<ProjetFinDetude> {
    return this.http.post<ProjetFinDetude>(`${this.apiUrl}/etude/ProjetFinDetudes`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etude/ProjetFinDetudes/${id}`); 
  }
}
