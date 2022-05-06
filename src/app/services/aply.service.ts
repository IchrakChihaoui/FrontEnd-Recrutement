import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aply } from '../models/aply'

@Injectable({
  providedIn: 'root'
})
export class AplyService {
  baseUrl = "http://localhost:3000/api";
  apiUrl = this.baseUrl ;

  constructor( private http:HttpClient){
   
    
  }


  createaply(aply:Aply):Observable<any>{
   return this.http.post(this.apiUrl+"/aply/save",aply, {observe: 'response'})
  }

  getaply():Observable<Aply[]>
  { 
    return this.http.get<Aply[]>(this.apiUrl+"/aply/findall")
  }
}
