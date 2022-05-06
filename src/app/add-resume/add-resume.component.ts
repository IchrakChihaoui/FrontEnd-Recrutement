import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ResumeService } from '../services/resume.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css']
})
export class AddResumeComponent implements OnInit {
  formulaire:FormGroup=new FormGroup({})
  CandidatId: any;

  constructor(public resumeservice:ResumeService, private fb:FormBuilder,public shar:SharedService) { }

  ngOnInit(): void {
    this.CandidatId=this.shar.iduser
    this.validators();
    
  }

  validators(){
    this.formulaire = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Location: ['', [Validators.required]],
     ResumeContent: ['', [Validators.required]], 
     Education: ['', [Validators.required]], 
     Experience: ['', [Validators.required]],
     //Photo: ['', [Validators.required]],
     //video: ['', [Validators.required]],
     Url: ['', [Validators.required]],
     CandidatId: this.shar.iduser,
    })
  } 

  addresume(){
    
    if(this.formulaire.valid){

      this.resumeservice.createResume(this.formulaire.value).subscribe(()=>{
       console.log("data inserted")
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your resume has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      })
    }

  }
 
}
