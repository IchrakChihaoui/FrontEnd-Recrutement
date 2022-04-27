import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { JobApiService } from '../services/job-api.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  formulaire:FormGroup=new FormGroup({})
  constructor(private fb: FormBuilder,public jobService:JobApiService,public route:Router) { }

  ngOnInit(): void {
    this.validators();
    console.log(this.formulaire.value)

  }

  validators()
  {
    this.formulaire = this.fb.group({
      Email: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Tags: ['', [Validators.required]], 
      Description: ['', [Validators.required]], 
      Closing_Date: ['', [Validators.required]],
      Company_Name: ['', [Validators.required]],
      Website: ['', [Validators.required]],
      Twitter_Username: ['', [Validators.required]],
      userId: localStorage.getItem('currentUserId'),


    })
  }

  addJob()
  {

    if(this.formulaire.valid)
    {
      this.jobService.createJobs(this.formulaire.value).subscribe(()=>{
        console.log("data inserted")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your job has been saved',
          showConfirmButton: false,
          timer: 1500
        })
  this.route.navigate(['/index'])

      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Please entre all champ required?</a>'
      })    }
     
  }

}
