import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asubs1dashComponent } from './asubs1dash/asubs1dash.component';
import { Anet1dashComponent } from './anet1dash/anet1dash.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AfutdashComponent } from './afutdash/afutdash.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    Asubs1dashComponent,
    Anet1dashComponent,
    Chart1Component,
    Chart2Component,
    AfutdashComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule,
    NgChartsModule,
    ChartistModule,
    NgCircleProgressModule,
    HttpClientModule
  ]
  ,
  exports:[Anet1dashComponent,Asubs1dashComponent,
          Chart1Component,Chart2Component]
  ,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
