import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import Swal from 'sweetalert2';
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
          Swal.fire({
           icon:'success',
           title:'You Have now successfully logged in',
           timer:2000 
          })

          this.ds.setloginstatus(1);
          this.appcomp.logchange();
          this.route.navigate(['/sbd1'])
          
        }
        else{
          //alert("Login Failed")
          Swal.fire({icon:'error',
          title:'Oops',
          text:'Sorry you have entered wrong credentials',

        })
          this.ds.setloginstatus(0);
        }


      },

    );

}

}
