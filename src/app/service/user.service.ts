import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/user`);
  }

  public getOne(id : Number) : Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/user/${id}`);
  }

  public postOne(depense : User) : Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/user`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/user/user/${id}`); 
  }
}
