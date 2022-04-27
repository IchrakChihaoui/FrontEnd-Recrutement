import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: any;
  Employer: boolean=false;
  Condidat: boolean=false;

  isLoggedIn$: Observable<boolean>;
  isCondidat$: Observable<boolean>;
  isEmployer$: Observable<boolean>;
  isCondidat: boolean;
  isEmployer: boolean;





  constructor(public router:Router,public authService:AuthServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isCondidat$ = this.authService.isCondidat;
    this.isEmployer$ = this.authService.isEmployer;

    this.isLoggedIn$.subscribe((val)=>{
      this.isAuthenticated=val
    })

    this.isCondidat$.subscribe((val)=>{
      this.isCondidat=val
    })

    this.isEmployer$.subscribe((val)=>{
      this.isEmployer=val
    })

    this.syncTemplate()
    }

    syncTemplate()
    {
      
    if(localStorage.getItem("role")=="Condidat")
    {
      this.Employer=false
          this.Condidat=true
    }else if(localStorage.getItem("role")=="Employer")
    {
      this.Employer=true
      this.Condidat=false

    }
    }

    

    logout()
    {
      localStorage.clear();
      this.authService.resetRole();
      this.authService.logout();
    }

    login(){
      localStorage.clear();
      this.router.navigate(["/my-account"])

    }

  

}
