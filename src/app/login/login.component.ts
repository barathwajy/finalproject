import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {


  username: string;
  password: string;
  email1:any;
  otp:any;
  constructor(private ds:DataserviceService, private route:Router,private appcomp:AppComponent){}

  onSubmit() {
    this.ds.login1(this.email1, this.password).subscribe(
      (response) => {
        
        if(response=="Login Successfull")
        {
          this.ds.setloginstatus(1);
          this.appcomp.logchange();
          this.route.navigate(['/sbd1'])
          
        }
        else{
          alert("Login Failed")
          this.ds.setloginstatus(0);
        }


      },

    );

}

}
