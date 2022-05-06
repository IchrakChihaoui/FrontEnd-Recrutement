import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseUrl = "http://localhost:3000/api";
  apiUrl = this.baseUrl ;

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>
  { 
    return this.http.get<User[]>(this.apiUrl+"/user/findall")
  }

  createUser(user:User):Observable<any>
  {
  return this.http.post(this.apiUrl+"/user/save", user)
  
  }
  
}
