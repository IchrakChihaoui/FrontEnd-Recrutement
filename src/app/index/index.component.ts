import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobApiService } from '../services/job-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  termSearch:string;
 
  listjob: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];

  constructor(public job: JobApiService,public router:Router) { }

  ngOnInit(): void {
    
    this.getjob()
    

  }

  getjob(){
    this.job.getJobs().subscribe(value=>{
      this.listjob=value
      console.log("job",this.listjob)
    })
  }

  scroll() {
}

  recherche(el: HTMLElement)
  {
    
    el.scrollIntoView();

  }

  aply(id:any,el: HTMLElement)
  {
    el.scrollIntoView();

    this.router.navigate(['/job-page'],{queryParams:{jobid:id}})
    console.log(id)  }

}
