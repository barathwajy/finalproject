import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { strings } from '@angular-devkit/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  otpdisplay:number=1;
  setpwddisplay:number=0;




  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  otpbyuser:string;
  otpfromdb: object;

  constructor(private ds: DataserviceService, private route: Router,private formBuilder: FormBuilder) {}

  ngOnInit() {

    
    
    this.addotpandverify
  }
  // closeModal() {
  //   this.activeModal.close('Modal Closed');
  // }
  addotpandverify(form:any)
  {
    const otpfromservice:string= this.ds.getotpfromback(); 
    console.log(`hello from otp page`)
    console.log(otpfromservice)
    this.otpbyuser=((form.value.otp1?.toString())+(form.value.otp2?.toString())+(form.value.otp3?.toString())+(form.value.otp4?.toString())+(form.value.otp5?.toString())+(form.value.otp6?.toString()))
    console.log(this.otpbyuser)

      //this.otpfromdb=this.ds.getotpforgetpass();
      //console.log(this.otpfromdb)
      if(otpfromservice==this.otpbyuser)
      {
        
        Swal.fire(
          {
             icon:'warning',
            title:'OTP Verified ',
            text:"Kindly Enter the new password",
            didOpen:function()
            {
              Swal.showLoading();
            },
            timer:2000,
            
            

          }
        )
        this.otpdisplay=0;
        this.setpwddisplay=1;
        //console.log(this.ds.getotpforgetpass)
      }
      else{
       
        Swal.fire('Check Entered OTP?',
        'Are You sure the OTP you entered is correct?',
        'question')
        //alert("incorrect otp")
        //console.log(this.ds.getotpforgetpass)

      }
  }

  onInputKeyUp(event: KeyboardEvent, index: number) {
    const target = event.target as HTMLInputElement;
    const inputLength = target.value.length;

    if (inputLength === 1 && index < this.otpInputs.length - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }
  }




  // PASSWORD CONFIRMATION


  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);

  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );

  onconfSubmit(): void {
    //console.log(this.resetPasswordForm);
    console.log(this.resetPasswordForm.value.newPassword);
    
    
    this.ds.updatepassword(localStorage.getItem('email'),this.resetPasswordForm.value.newPassword).subscribe((resp:any)=>
    {
      if(resp=="password updated")
      {
        Swal.fire(
          'Success!',
          'Your Password has been updated successfully',
          'success'
        )

        //alert("New Password Updated")
        this.route.navigate(['/login'])
      }
    })


    if (!this.resetPasswordForm?.valid) {
      return;
    }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }



}