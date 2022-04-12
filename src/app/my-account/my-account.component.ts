import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../providers/custom-validators';
import { RestApiService } from '../services/rest-api.service';
import { User } from 'c:/Users/ichrak/Desktop/JobPortal-master/src/app/models/user';



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  singUp: boolean = false;
  singIn: boolean = true;
  form: FormGroup = new FormGroup({});
  loginForm: FormGroup = new FormGroup({})
  success: string;
  submitted: boolean = false;
  users: import("c:/Users/ichrak/Desktop/JobPortal-master/src/app/models/user").User[];



  constructor(private fb: FormBuilder, public restApi: RestApiService, public router: Router) {

    /*  this.registerForm = this.fb.group({
       email: [null, Validators.compose([
         Validators.email,
         Validators.required])
      ],
       reg_password: [null, Validators.compose([
         Validators.required,
         Validators.minLength(8)],
         )] ,
       reg_password2: [null, Validators.compose([
         Validators.required,
         Validators.minLength(8)])]
 
     },
 
     { 
       validator: ConfirmedValidator('reg_password', 'reg_password2')
     }) */

    this.form = fb.group({
      email: [null, Validators.compose([
        Validators.email,
        Validators.required])
      ],
      reg_password: ['', [Validators.required]],
      reg_password2: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('reg_password', 'reg_password2')
    })


    this.loginForm = fb.group({
      mail: ['', [Validators.email]],
      password: ['', [Validators.required]]


    })

  }


  ngOnInit(): void {
    this.restApi.getUsers().subscribe((users) => {
      this.users = users;
      console.log("users", this.users)

    })

  }

  get f() {

    return this.form.controls;
  }
  get fLogin() {
    return this.loginForm.controls
  }


  submit() {


    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {

      return;
    } else {

      let fetchUser = this.users.find(item => item.mail == this.loginForm.value.mail)
      if (fetchUser) {
        alert("Account already exist")
      } else {
        this.success = JSON.stringify(this.form.value);
        let user = new User(this.form.controls['email'].value, this.form.controls['reg_password'].value)
        this.restApi.createUser(user).subscribe((data) => {
          alert("Account created succsufuly")

        })
        console.log(user)

      }


    }




  }


  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.success = JSON.stringify(this.loginForm.value)
      let user = this.users.find(item => item.mail == this.loginForm.value.mail)
      console.log("user", user)
      if (user) {

        localStorage.setItem("isAuthenticated", 'true')
        this.router.navigate(["/index"])
      } else {
        alert("Please verify your informations or create an account ")
      }
    }
  }


  singup() {
    this.singUp = true;
    this.singIn = false;

  }
  singin() {
    this.restApi.getUsers().subscribe((users) => {
      this.users = users;
      console.log("users", this.users)

    })

    this.singUp = false;
    this.singIn = true;
  }

}

