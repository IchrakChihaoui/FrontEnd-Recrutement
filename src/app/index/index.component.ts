import { Component, OnInit } from '@angular/core';
import { JobApiService } from '../services/job-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  termSearch:string;
 
  listjob: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];

  constructor(public job: JobApiService) { }

  ngOnInit(): void {
    
    this.getjob()
    

  }

  getjob(){
    this.job.getJobs().subscribe(value=>{
      this.listjob=value
      console.log("job",this.listjob)
    })
  }

  recherche()
  {
    this.listjob=this.listjob.filter(item=>item.Title==this.termSearch)
    console.log(this.termSearch)
  }

}
