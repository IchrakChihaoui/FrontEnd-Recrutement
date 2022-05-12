import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobApiService {

  baseUrl = "http://localhost:3000/api";
  apiUrl = this.baseUrl ;

  constructor(private http:HttpClient) { 
  }

  getJobs():Observable<Job[]>
  { 
    return this.http.get<Job[]>(this.apiUrl+"/job/findall")
  }

  createJobs(job:Job):Observable<any>
  {
  return this.http.post(this.apiUrl+"/job/save", job, {observe: 'response'})
  
  }
  delete(_id:any)
{
return this.http.delete(this.apiUrl+"/job/delete/"+_id)

}
}
