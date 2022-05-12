import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AplyService } from '../services/aply.service';
import { JobApiService } from '../services/job-api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-job-alerts',
  templateUrl: './job-alerts.component.html',
  styleUrls: ['./job-alerts.component.css']
})
export class JobAlertsComponent implements OnInit {
  aplys: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/aply").Aply[];
  jobs: import("c:/Users/ichrak/Desktop/JobPortal-master-V2/src/app/models/job").Job[];
  jobalert:  Array<{ AplyId: string,statut :string, title:string, Location:string,type:string}> = [];

  constructor( public aply:AplyService , public job:JobApiService , public shar:SharedService) { }

  ngOnInit(): void {
    this.getaply()
  }
  
 getaply(){
   this.jobalert=[]
  this.aply.getAplys().subscribe(value=>{
    this.aplys=value
    let userId=this.shar.iduser
    this.aplys=this.aplys.filter(item=>item.userid==userId)
      console.log("aplys",this.aplys)

      this.job.getJobs().subscribe(value=>{
        this.jobs=value
        console.log(this.jobs)
        this.aplys.forEach(Element=>{
          let jobDetails=this.jobs.find(item=>item._id==Element.jobid)
          let  jobTitle=jobDetails.Title
          let Location=jobDetails.Location
          let type=jobDetails.Type

          this.jobalert.push({AplyId:Element._id,statut:Element.accepted,title:jobTitle, Location:Location,type:type} )
          console.log(this.jobalert)

        })
})
 })
}
delete(AplyId:any){
 this.aply.delete(AplyId).subscribe(()=>this.getaply())
 Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'deleted',
  showConfirmButton: false,
  timer: 1500
})
 console.log("delete")
  console.log("hhhh",AplyId)

}

}
