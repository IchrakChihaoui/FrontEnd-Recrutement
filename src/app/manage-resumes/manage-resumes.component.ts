import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ResumeService } from '../services/resume.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-manage-resumes',
  templateUrl: './manage-resumes.component.html',
  styleUrls: ['./manage-resumes.component.css']
})
export class ManageResumesComponent implements OnInit {
  listresume: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/resume").Resume[];
  curentuser: any;
  mylistresume: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/resume").Resume[];
  deleteresume: any;

  constructor(public resume:ResumeService , public shar:SharedService) { }

  ngOnInit(): void {
    
    this.getresume()
    this.curentuser=this.shar.iduser
  }

  getresume(){
    this.resume.getResume().subscribe(value=>{
      this.listresume=value
      console.log("resume",this.listresume)
      this.mylistresume=this.listresume.filter(item=>item.CandidatId=this.curentuser)
      console.log("mylist",this.mylistresume)
      console.log("curentuser",this.curentuser)
    })
  }
  delete(_id:string){

    console.log("id to delete ",_id)

    this.resume.delete(_id).subscribe(()=>{
this.getresume() 
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your  has been saved',
  showConfirmButton: false,
  timer: 1500
})
      console.log("delete")
    })


  }

}
