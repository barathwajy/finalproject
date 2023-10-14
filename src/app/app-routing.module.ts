import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Asubs1dashComponent } from './pages/asubs1dash/asubs1dash.component';
import { Anet1dashComponent } from './pages/anet1dash/anet1dash.component';
import { AfutdashComponent } from './pages/afutdash/afutdash.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
