import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  baseurl:string='http://localhost:9095/'
  forgot:string='forgot'
  login:string='login';
  otp:string;
  otpfromback:string;
  constructor(private http:HttpClient) { }

  emailforgotfromback:string;



  sendotp(email:any)
  {
    this.emailforgotfromback=email;

    return this.http.get(this.baseurl+this.forgot+'/'+email);
    //otpstr:String = JSON.stringify(this.otp); 
    //return this.otp;

  }

  getemailforgot()
  {
    return this.emailforgotfromback;
  }
  

  login1(username: string, password: string) {
    // Make an HTTP POST request to your Spring Boot login endpoint
    return this.http.get(this.baseurl+this.login+'/'+username+'/'+password);
  
  }

  getotpdb()
  {
    return this.http.get(this.baseurl+'getotpdb')
  }

  setotpforgetpass(otp:string)
  {
    this.otpfromback=otp;
  }

  getotpfromback()
  {
    return this.otpfromback
  }
}
