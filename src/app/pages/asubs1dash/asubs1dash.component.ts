import { Component } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-asubs1dash',
  templateUrl: './asubs1dash.component.html',
  styleUrls: ['./asubs1dash.component.css'],
 

})
export class Asubs1dashComponent {

  circleval:number=60;

  
  lineChart1Data: ChartData<'pie'> = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050],  },
   
    ],
    
  };

  lineChart1Options: ChartOptions = {
    responsive:true,
    plugins:{
     
      legend:{
        position:'right',
      }
    }
    ,
    
  };

  lineChart2Data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5,backgroundColor:'rgba(255, 99, 132, 0.2)',fill:true },
      { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5,backgroundColor:'rgba(3,139,255,0.2',fill:true },
      { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 , backgroundColor:'rgba(255,255,0,0.2)',fill:true},
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5, backgroundColor:'rgba(192,192,192,0.2)',fill:true },
    ],
    
  };

  lineChart2Options: ChartOptions = {
    responsive:true,
    plugins:{
    }
    ,
    
  };


  StackedBarChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500],stack:'a'},
      { label: 'Laptop', data: [200, 100, 400, 50, 90],stack:'a' },
      { label: 'AC', data: [500, 400, 350, 450, 650],stack:'a' },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], stack:'a' },
    ],
  };

  StackedBarChartOptions: ChartOptions = {
    responsive:true,
    plugins:{
    }
    ,
    
  };

  
  BarChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500],},
      { label: 'Laptop', data: [200, 100, 400, 50, 90],},
      { label: 'AC', data: [500, 400, 350, 450, 650], },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], },
    ],
  };

  BarChartOptions: ChartOptions = {
    responsive:true,
    plugins:{
    }
    ,
    
  };


  lineChart3Data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5,backgroundColor:'rgba(255, 99, 132, 0.2)',fill:false },
      
    ],
    
  };

  lineChart3Options: ChartOptions = {
    responsive:true,
    plugins:{
      
    }
    ,
    
  };








  
  
}
