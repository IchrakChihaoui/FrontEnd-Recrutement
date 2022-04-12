import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;


  constructor(public router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("isAuthenticated"))
    {
          this.isAuthenticated=true
          console.log("isAuthenticated", this.isAuthenticated)
    }else
    {

      this.isAuthenticated=false
      console.log("isAuthenticated", this.isAuthenticated)


    }
    }

    logout()
    {
      localStorage.clear();
      this.router.navigate(["/my-account"])
    }

    login(){
      localStorage.clear();
      this.router.navigate(["/my-account"])

    }

  

}
