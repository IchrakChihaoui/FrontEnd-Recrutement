import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Aply } from '../models/aply'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AplyService {
 
  baseUrl = "http://localhost:3000/api";
  apiUrl = this.baseUrl ;

  constructor( private http:HttpClient){
   
    
  }


  createaply(aply:any):Observable<any>{
   return this.http.post(this.apiUrl+"/aply/save",aply, {observe: 'response'})
  }

  getAplys():Observable<Aply[]>
  { 
    return this.http.get<Aply[]>(this.apiUrl+"/aply/findall")
  }

  updateAply(aply: any,id:any ): Observable<Aply> {
    return this.http.put<any>(this.apiUrl+"/aply/update/"+id, aply, httpOptions)
 
  
}

delete(_id:any)
{
return this.http.delete(this.apiUrl+"/aply/delete/"+_id)

}
}
