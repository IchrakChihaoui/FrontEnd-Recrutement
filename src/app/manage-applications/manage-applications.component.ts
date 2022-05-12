import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { jobApplication } from '../models/jobApplication';
import { AplyService } from '../services/aply.service';
import { JobApiService } from '../services/job-api.service';
import { ResumeService } from '../services/resume.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-manage-applications',
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.css']
})
export class ManageApplicationsComponent implements OnInit {
  aplys: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/aply").Aply[];
  resumes: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/resume").Resume[];
  jobs: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];
  jobApplication: any[]=[];
  jobAppList: Array<{AplyId: string, condidatName: string,jobTitle:string, jobDescription: string,resumeDetail:any}> = [];

  recherche:string;
  constructor(public aply:AplyService,public share:SharedService, public job:JobApiService, public resume:ResumeService ) { }

  ngOnInit(): void {
    this.getAplys()
  }

  getAplys(){


    this.aply.getAplys().subscribe(value=>{
      this.aplys=value
      let emId=this.share.iduser
      this.aplys=this.aplys.filter(item=>item.idemployer==emId && item.accepted==0)
      console.log("aplys",this.aplys)
   
      this.resume.getResume().subscribe( value=>{
        this.resumes=value
     
      this.job.getJobs().subscribe(value=>{
        this.jobs=value

      
      console.log(this.jobs,this.resumes)
      this.aplys.forEach(element => {
       let resumeDetaille=this.resumes.find(item=>item.CandidatId==element.userid)
       let jobDetails=this.jobs.find(item=>item._id==element.jobid)
       let condidatName=resumeDetaille.Name
       let jobTitle =jobDetails.Title
       let jobDiscription = jobDetails.Description
       
  
       this.jobAppList.push({AplyId:element._id,condidatName:condidatName,jobTitle:jobTitle,jobDescription:jobDiscription,resumeDetail:resumeDetaille})
       console.log(this.jobAppList) 

      });
    })
  })
})
  }

    cv()
{
  
}
updateaply(idAply:any){
let aply={
    "accepted":"1"
 }
  this.aply.updateAply(aply,idAply).subscribe(()=>{
    console.log("dvsdvsd")
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Candidat accepted',
      showConfirmButton: false,
      timer: 1500
    }) 
    this.getAplys()

    
  })
  
}
rechercher(){
  console.log("hccc")
}



}
