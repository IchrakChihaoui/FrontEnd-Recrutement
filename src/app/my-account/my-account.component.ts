import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { ConfirmedValidator } from '../providers/custom-validators';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { RestApiService } from '../services/rest-api.service';



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
  users: User[];
  currentUserId: string;



  constructor(private fb: FormBuilder, public restApi: RestApiService, public router: Router
    ,public authService:AuthServiceService) {

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
this.currentUserId=user.id 
console.log("currect user id",this.currentUserId)  
  this.choiceRole()
        
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


  choiceRole()
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'WELCOME TO OUR JOBORTAL ',
      text: "ARE YOU CONDIDATE OR EMPLOYER ? ",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'CONDIDATE',
      cancelButtonText: 'EMPLOYER',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'thanks!',
          'You are now registred as Condidat .',
          'success'
        )
        this.authService.login();
        this.authService.setRoleCondidat()
        localStorage.setItem("role", 'Condidat')
        localStorage.setItem("isAuthenticated", 'true')
        localStorage.setItem('currentUserId',this.currentUserId)
        this.router.navigate(["/index"])
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'thanks',
          'You are now registred as Employer .)',
          'success'
          
        )
        this.authService.login();
        this.authService.setRoleEmployer()
        localStorage.setItem("role", 'Employer')
        localStorage.setItem("isAuthenticated", 'true')
        this.router.navigate(["/index"])
      }
    })
  }

}

