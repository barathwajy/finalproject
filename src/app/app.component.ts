import { Component,ViewChild } from '@angular/core';
import { DataserviceService } from './dataservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="finalproject"

  loggedin:number=0;

  constructor(private ds:DataserviceService)
  {}

  logchange()
  {
    this.loggedin = this.ds.getloginstatus();
  }
  
 }
