import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { FutdataservService } from 'src/app/futdataserv.service';
import { SubdataservService } from 'src/app/subdataserv.service';
import { serviceutil } from 'src/datatransfer';
@Component({
  selector: 'app-asubs1dash',
  templateUrl: './asubs1dash.component.html',
  styleUrls: ['./asubs1dash.component.css'],
 

})
export class Asubs1dashComponent {


  summer=0;
  rev=0;
  totalcustomers:number;
  currentcustomers:number;
  churnedcustomers:number;
  newjoinedcustomers:number;

  monthlyrevenue:number[]=[];
  custpermonth:number[]=[];


  subsmonyearandtwo:number[]=[];
  monthsubs:number=0;
  oneyearsubs:number=0;
  twoyearsubs:number=0;


  arrdaysms:number[]=[];
  arrdaycalls:number[]=[];
  arrdaydata:number[]=[];

  arrnoonsms:number[]=[];
  arrnooncalls:number[]=[];
  arrnoondata:number[]=[];

  arrnightsms:number[]=[];;
  arrnightcalls:number[]=[];
  arrnightdata:number[]=[];

  daysms:number=0;
  daycalls:number=0;
  daydata:number=0;

  noonsms:number=0;
  nooncalls:number=0;
  noondata:number=0;

  nightsms:number=0;
  nightcalls:number=0;
  nightdata:number=0;

  tsms=0
  tcalls=0;
  tdata=0;

  trsms:number[]=[];
  trcalls:number[]=[];
  trdata:number[]=[];


  subscribertimedata: ChartData<'line'>
  subscribertimeoptions: ChartOptions

  revenuetimedata: ChartData<'line'>
  revenuetimeoptions:ChartOptions

  contractdata:ChartData<'pie'>
  contractoptions:ChartOptions

  serviceutiltime:ChartData<'bar'>
  serviceutiloptions:ChartOptions

  daytimedata:ChartData<'bar'>
  daytimeoptions:ChartOptions



  subdatas:any;

  constructor(private subsdata:SubdataservService, private http:HttpClient,private servdata:FutdataservService)
  {
    this.chartrender();
    this.chartrender2();
  }
  circleval:number=4;

  
  lineChart1Data: ChartData<'pie'> = {
    labels: ['Month', 'Single Year', 'Two Year'],
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







  chartrender()
  {
    
    this.subsdata.findall().subscribe((data)=>
    {
      this.totalcustomers=data.length
      this.churnedcustomers=0;
      this.newjoinedcustomers=0;

      this.summer=0;
      this.rev=0
      let compare=1;
      data.forEach((item)=>{
        if(item.customerStatus==="Churned")
        {
          this.churnedcustomers+=1;
        }
        else if(item.customerStatus==="Joined")
        {
          this.newjoinedcustomers+=1
        }
        console.log(item.dateofJoining.split("/")[0])

        
        if(item.dateofJoining.split("/")[0]==compare.toString())
        {
          //console.log(item.dateofJoining.split("/")[0],compare.toString())
          this.summer+=1
          this.rev+= item.totalRevenue
        }
        else{
          this.custpermonth.push(this.summer)

          this.monthlyrevenue.push((this.rev/this.summer))
          this.summer=1

          this.rev=0;
          this.rev+=item.totalRevenue

          compare+=1
        }

        if(item.contract==="One Year")
        {
            this.oneyearsubs+=1
        }
        else if(item.contract==="Month-to-Month")
        {
            this.monthsubs+=1
        }
        else if(item.contract==="Two Year")
        {
            this.twoyearsubs+=1
        }


        
      })
      this.subsmonyearandtwo.push(this.monthsubs)
      this.subsmonyearandtwo.push(this.oneyearsubs)
      this.subsmonyearandtwo.push(this.twoyearsubs)

      this.custpermonth.push(this.summer)
      this.monthlyrevenue.push(this.rev/this.summer)


      console.log(this.custpermonth)
      console.log(this.monthlyrevenue)

      this.currentcustomers=(data.length)-this.churnedcustomers;

      console.log(this.churnedcustomers)
      console.log(this.newjoinedcustomers)
      console.log(this.currentcustomers)



      this.subscribertimedata={
        labels:['Jan','Feb','Mar','Apr','May','June','July','Sep','Oct'],
        datasets:[
          {label:'Subscribers',data:this.custpermonth,tension:0.5,fill:true}
        ],
      }
      this.subscribertimeoptions={
        responsive:true
      }

      this.revenuetimedata={
        labels:['Jan','Feb','Mar','Apr','May','June','July','Sep','Oct'],
        datasets:[
          {label:'Subscribers',data:this.monthlyrevenue,tension:0.5}
        ],
      }
      
      this.revenuetimeoptions={
        responsive:true
      }


      this.contractdata={
        labels:['Monthly','Yearly','Two Years'],
        datasets:[
          {label:'Subscribers',data:this.subsmonyearandtwo}
        ],
      }
      
      this.contractoptions={
        responsive:true
      }







    })
    
  }


  chartrender2()
  {

    this.servdata.findall().subscribe((data)=>
    {
      console.log(data)
      let compare=1;

      data.forEach((item1)=>
      {
        //console.log(parseInt(item1.date.split("-")[1]))

        if(parseInt(item1.date.split("-")[1])==compare)
        {
          this.tcalls+= item1.callsMade
          this.tdata+= item1.dataUsage
          this.tsms+= item1.sms
          console.log(item1.callsMade)


          if(item1.timeofDay==="Day")
          {
            this.daycalls+= item1.callsMade
            this.daydata+= item1.dataUsage
            this.daysms+= item1.sms

          }
          else if(item1.timeofDay==="Noon")
          {
            this.nooncalls+= item1.callsMade
            this.noondata+= item1.dataUsage
            this.noonsms += item1.sms
          }
          else if(item1.timeofDay=="Night")
          {
            this.nightcalls+= item1.callsMade
            this.nightdata+= item1.dataUsage
            this.nightsms += item1.sms
          }

        }
        else
        {
          this.trcalls.push(this.tcalls)
          this.trdata.push(this.tdata)
          this.trsms.push(this.tsms)

          this.tcalls=0
          this.tdata=0
          this.tsms=0

          this.tcalls+=item1.callsMade
          this.tdata+=item1.dataUsage
          this.tsms+=item1.sms


          this.arrdaycalls.push(this.daycalls)
          this.arrdaydata.push(this.daydata)
          this.arrdaysms.push(this.daysms)

          this.arrnooncalls.push(this.nooncalls)
          this.arrnoondata.push(this.noondata)
          this.arrnoonsms.push(this.noonsms)

          this.arrnightcalls.push(this.nightcalls)
          this.arrnightdata.push(this.nightdata)
          this.arrnightsms.push(this.nightsms)

          this.daycalls=0
          this.daydata=0
          this.daysms=0

          this.nooncalls=0;
          this.noondata=0
          this.noonsms=0

          this.nightcalls=0;
          this.nightdata=0;
          this.nightsms=0;

          if(item1.timeofDay==="Day")
          {
            this.daycalls+= item1.callsMade
            this.daydata+= item1.dataUsage
            this.daysms+= item1.sms

          }
          else if(item1.timeofDay==="Noon")
          {
            this.nooncalls+= item1.callsMade
            this.noondata+= item1.dataUsage
            this.noonsms += item1.sms
          }
          else if(item1.timeofDay=="Night")
          {
            this.nightcalls+= item1.callsMade
            this.nightdata+= item1.dataUsage
            this.nightsms += item1.sms
          }



          
          compare+=1
        }



      })
      this.trcalls.push(this.tcalls)
      this.trdata.push(this.tdata)
      this.trsms.push(this.tsms)

      this.arrdaycalls.push(this.daycalls)
      this.arrdaydata.push(this.daydata)
      this.arrdaysms.push(this.daysms)

      this.arrnooncalls.push(this.nooncalls)
      this.arrnoondata.push(this.noondata)
      this.arrnoonsms.push(this.noonsms)

      this.arrnightcalls.push(this.nightcalls)
      this.arrnightdata.push(this.nightdata)
      this.arrnightsms.push(this.nightsms)


      console.log(this.trcalls)
      console.log(this.trdata)
      console.log(this.trsms)


      this.serviceutiltime={
        labels:['Jan','Feb','Mar','Apr','May','June','July','Sep','Oct'],
        datasets:[
          {label:'SMS',data:this.trcalls,stack:'a'},
          {label:'Calls Made',data:this.trdata,stack:'a'},
          {label:'Data',data:this.trsms,stack:'a'}
        ],
      }

      this.serviceutiloptions={
        responsive:true
      }

      this.daytimedata={
        labels:['Jan','Feb','Mar','Apr','May','June','July','Sep','Oct'],
        datasets:[
          {label:'Calls - Day',data:this.arrdaycalls,stack:'day'},
          {label:'SMS - Day',data:this.arrdaysms,stack:'day'},
          {label:'Data - Day',data:this.arrdaydata,stack:'day'},

          {label:'Calls - Noon',data:this.arrnooncalls,stack:'noon'},
          {label:'SMS - Noon',data:this.arrnoonsms,stack:'noon'},
          {label:'Data - Noon',data:this.arrnoondata,stack:'noon'},

          {label:'Calls - Night',data:this.arrnightcalls,stack:'night'},
          {label:'SMS - Night',data:this.arrnightsms,stack:'night'},
          {label:'Data - Night',data:this.arrnightdata,stack:'night'},
        ],

      }
      this.daytimeoptions={
        responsive:true
      }

      


    })
  }

  
  
}
