import { Component } from '@angular/core';
import { right } from '@popperjs/core';
import { Chart,ChartData,ChartOptions } from 'chart.js';

@Component({
  selector: 'app-afutdash',
  templateUrl: './afutdash.component.html',
  styleUrls: ['./afutdash.component.css']
})
export class AfutdashComponent {

  cusosecurity:number=33;





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
    indexAxis:'y',
    responsive:true,
    plugins:{
      legend:{
        display:false
      }
    }
    ,
    
  };

}
