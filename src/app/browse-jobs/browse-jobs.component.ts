import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { JobApiService } from '../services/job-api.service';

@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {
  jobs: Job[];
  Jobslength: number;
  filterTerm: string;
  filteCity:string;


  constructor(public jobServices:JobApiService) { }

  ngOnInit(): void {
    console.log("term",this.filterTerm)
    this.getJobs()
  }

  getJobs()
  {
    this.jobServices.getJobs().subscribe((val)=>{
      this.jobs=val
      this.Jobslength=this.jobs.length
      console.log(this.jobs)
    })
  }

  filter()
  {
    this.jobs=this.jobs.filter(item=>item.Location==this.filteCity)
    console.log("after filter",this.jobs)
  }

}
