import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  baseUrl = "http://localhost:3000/api";
  apiUrl = this.baseUrl ;

  constructor(private http:HttpClient ) { }

  createResume(resume:Resume):Observable<any>
  {
  return this.http.post(this.apiUrl+"/resume/save", resume, {observe: 'response'})
  
  }

  getResume():Observable<Resume[]>
  { 
    return this.http.get<Resume[]>(this.apiUrl+"/resume/findall")
  }
}
