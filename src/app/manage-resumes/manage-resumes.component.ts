import { Component, OnInit } from '@angular/core';
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

}
