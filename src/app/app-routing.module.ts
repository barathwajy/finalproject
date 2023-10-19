import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Asubs1dashComponent } from './pages/asubs1dash/asubs1dash.component';
import { Anet1dashComponent } from './pages/anet1dash/anet1dash.component';
import { AfutdashComponent } from './pages/afutdash/afutdash.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpComponent } from './otp/otp.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  }
  ,
  {
    path:'otp-set',
    component:OtpComponent
  }
  ,
  {
    path:"sbd1",
    component:Asubs1dashComponent
  }
  ,
  {
    path:"ntd1",
    component:Anet1dashComponent
  },
  {
    path:"futd1",
    component:AfutdashComponent
  },
  {
    path:'nav',
    component:NavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
