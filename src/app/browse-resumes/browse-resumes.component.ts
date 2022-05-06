import { Component, OnInit } from '@angular/core';
import { Resume } from '../models/resume';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-browse-resumes',
  templateUrl: './browse-resumes.component.html',
  styleUrls: ['./browse-resumes.component.css']
})
export class BrowseResumesComponent implements OnInit {
  listresume: Resume[];

  constructor( public resumeservice:ResumeService) { }

  ngOnInit(): void {
    this.getResume()
  }

  getResume(){
    this.resumeservice.getResume().subscribe(value=>{
      this.listresume=value
      console.log(this.listresume)
  })
  }
}
