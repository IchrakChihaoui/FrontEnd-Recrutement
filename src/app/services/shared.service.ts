import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  iduser:any;


  constructor() { }

  setID(ID:any){
    this.iduser=ID

  }

}
