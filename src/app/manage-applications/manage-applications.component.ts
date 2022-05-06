import { Component, OnInit } from '@angular/core';
import { AplyService } from '../services/aply.service';

@Component({
  selector: 'app-manage-applications',
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.css']
})
export class ManageApplicationsComponent implements OnInit {

  constructor(public aply:AplyService) { }

  ngOnInit(): void {
  }

  getaply(){
    
  }

}
