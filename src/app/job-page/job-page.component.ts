import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AplyService } from '../services/aply.service';
import { JobApiService } from '../services/job-api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css']
})
export class JobPageComponent implements OnInit {
  idjob: any;
  listjob: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];
  selectjob: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job;

  constructor(public activateroute:ActivatedRoute, public jobservice:JobApiService, public shar:SharedService, public aplyservice:AplyService) { }

  ngOnInit(): void {
    this.activateroute.queryParams.subscribe(param=>{
      this.idjob=param.jobid
      console.log(this.idjob)
    })
    this.getjobs()
  }

  getjobs(){
    this.jobservice.getJobs().subscribe(value=>{
      this.listjob=value
      console.log("hhhh",this.listjob)
      this.selectjob=this.listjob.find(item=>item._id==this.idjob)
      console.log("select job",this.selectjob)
    })

  }
  aply(id:any ,idjob:any){
    console.log("create")
    let userId=this.shar.iduser
    let idemployer=id
    let jobid=idjob
    let aply={
      'userid':userId,
      'idemployer':idemployer,
      'jobid':jobid,
      'accepted':0
    }

    this.aplyservice.createaply(aply).subscribe(()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'aply succed',
        showConfirmButton: false,
        timer: 1500
      })
    
      console.log("create")
    })
    
  }




}
