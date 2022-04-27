import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private condidat: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private employer: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);



  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isCondidat() {
    return this.condidat.asObservable();
  }

  get isEmployer() {
    return this.employer.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login() {
    localStorage.clear();

      this.loggedIn.next(true);
      this.router.navigate(['/my-account']);
    
  }

  setRoleCondidat()
  {
    this.condidat.next(true);

  }

  setRoleEmployer()
  {
    this.employer.next(true);

  }

  resetRole()
  {

    this.employer.next(false);
    this.condidat.next(false);


    
  }

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/my-account']);
  }


}
