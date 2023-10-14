import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Route,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from '../otp/otp.component';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {




  email: string = "";
  otpstatus!:any;
  showOTPInput: boolean = false;

  title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup; // Define a FormGroup
  submitted = false;

  
  constructor(private ds: DataserviceService ,private formBuilder: FormBuilder,private router:Router) {}
  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
  routto() {
    console.log(`hello`)
    // Implement your logic to send an email with a reset link here.
    // Once the email is sent, set showOTPInput to true.
    // You can also handle errors if the email sending fails.
    this.ds.sendotp(this.email).subscribe(
      (response=> {
          // this.otpstatus=response
          const otpnew:object = response;
          const otpsend:string = otpnew.toString()
          console.log(otpsend)
          console.log(typeof(otpsend))
          this.ds.setotpforgetpass(otpsend)
          this.router.navigate(['/otp'])
          // if(this.otpstatus.length==6)
          {
            // this.router.naviagte(['/otp']);
            //this.ds.setotpforgetpass(response)
            //console.log(response)
            //console.log(typeof(response))
            
          }
      }
    )
  )}

  // verifyOTP() {
  //   // Implement your logic to verify the OTP here.
  //   // You can compare this.otp with the expected OTP.
  //   if (this.otp === '123456') { // Change this to your actual OTP verification logic
  //     // OTP is correct, you can reset the password here.
  //     console.log('OTP verified successfully');
  //   } else {
  //     // OTP is incorrect, show an error message.
  //     console.error('OTP verification failed');
  //   }
  // }

  ngOnInit() {
    // Initialize the FormGroup and define the email input with Validators
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]] // Email input with required and email validators
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    
 

}

// openModal(){
//   const modalRef = this.modalService.open(OtpComponent, { centered: true });
// }

// onInputKeyUp(event: KeyboardEvent, index: number) {
//   const target = event.target as HTMLInputElement;
//   const inputLength = target.value.length;

//   if (inputLength === 1 && index < this.otpInputs.length - 1) {
//     this.otpInputs.toArray()[index + 1].nativeElement.focus();
//   }
// }


}