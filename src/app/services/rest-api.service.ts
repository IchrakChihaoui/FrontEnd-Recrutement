import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseUrl = "http://localhost:3000/";
  apiUrl = this.baseUrl ;

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>
  { 
    return this.http.get<User[]>(this.apiUrl+"users")
  }

  createUser(user:User):Observable<any>
  {
  return this.http.post(this.apiUrl+"users", user, {observe: 'response'})
  
  }
  
}
