import { Component, OnInit } from '@angular/core';
import { JobApiService } from '../services/job-api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  listjob: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];
  curentuser: string;
  mylistjob: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];

  constructor(public jobservice:JobApiService, public shar:SharedService) { }

  ngOnInit(): void {
    this.getjob()
    this.curentuser=this.shar.iduser
  }

  getjob(){
    this.jobservice.getJobs().subscribe(value=>{
      this.listjob=value
      console.log("jobs",this.listjob)
      this.mylistjob=this.listjob.filter(item=>item.userId==this.curentuser)
      console.log("mylist",this.mylistjob)
      console.log("currentuser",this.curentuser)
    })
  }

}
