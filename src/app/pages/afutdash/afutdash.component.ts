import { Component } from '@angular/core';
import { right } from '@popperjs/core';
import { Chart,ChartData,ChartOptions } from 'chart.js';
import { SubdataservService } from 'src/app/subdataserv.service';

@Component({
  selector: 'app-afutdash',
  templateUrl: './afutdash.component.html',
  styleUrls: ['./afutdash.component.css']
})
export class AfutdashComponent {

  cusosecurity:number=33;

  custsecurity=0
  custbackup=0
  custprotection=0;
  custtech=0;
  custtv=0;
  custmovies=0;

  chursecurity=0
  churbackup=0
  churprotection=0;
  churtech=0;
  churtv=0;
  churmovies=0;




  arrchurn:string[]=["Attitude of service provider","Attitude of support person","Competitor had better devices","Competitor made better offer","Competitor offered higher download speeds","Competitor offered more data","Deceased","Don't know","Extra data charges","Lack of affordable download/upload speed","Lack of self-service on Website","Limited range of services","Long distance charges","Moved","Network reliability","Poor expertise of online support","Poor expertise of phone support","Price too high","Product dissatisfaction","Service dissatisfaction"];
  arrchurncount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  churndata:ChartData<'bar'>
  churnoptions:ChartOptions


  constructor(private subscriberdata:SubdataservService)
  {
    this.chartrender();
  }

  BarChartData: ChartData<'line'> = {
    labels: ['2023-01-01','2023-02-01	','2023-03-01	','2023-04-01','2023-05-01','2023-06-01','2023-07-01','2023-08-01','2023-09-01',"2023-10-01","2023-11-01","2023-12-01"],
    datasets: [
      // { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500],},
      // { label: 'Laptop', data: [200, 100, 400, 50, 90],},
      { label: 'Forecasted Customers', data: [,,,,,,,,,655,703,766], },
      { label: 'Exisiting Customers', data: [592, 793, 754, 831, 707,557,734,700,719,656], },
    ],
  };

  BarChartOptions: ChartOptions = {
    responsive:true,
    plugins:{
      legend:{
        display:false
      }
    }
    ,
    
  };

  chartrender()
  {
    
    this.subscriberdata.findall().subscribe((data)=>
    {
      
      data.forEach((item)=>
      {


        if(item.onlineSecurity==="Yes" && (item.customerStatus==="Stayed" || item.customerStatus=="Joined"))
        {
          this.custsecurity+=1
          console.log("secure")
        }
        else if(item.onlineSecurity==="Yes" &&(item.customerStatus==="Churned"))
        {
          this.chursecurity+=1
        }

        if(item.onlineBackup==="Yes" && (item.customerStatus==="Stayed" || item.customerStatus=="Joined"))
        {
          this.custbackup+=1
        }
        else if(item.onlineBackup==="Yes" &&(item.customerStatus==="Churned"))
        {
          this.churbackup+=1
        }

        if(item.deviceProtectionPlan==="Yes" && (item.customerStatus==="Stayed" || item.customerStatus=="Joined"))
        {
          this.custprotection+=1
        }
        else if(item.deviceProtectionPlan==="Yes" &&(item.customerStatus==="Churned"))
        {
          this.churprotection+=1
        }


        if(item.premiumTechSupport==="Yes" && (item.customerStatus==="Stayed" || item.customerStatus=="Joined"))
        {
          this.custtech+=1
        }
        else if(item.premiumTechSupport==="Yes" &&(item.customerStatus==="Churned"))
        {
          this.churtech+=1
        }


        if(item.streamingTV==="Yes" && (item.customerStatus==="Stayed" || item.customerStatus=="Joined"))
        {
          this.custtv+=1
        }
        else if(item.streamingTV==="Yes" &&(item.customerStatus==="Churned"))
        {
          this.churtv+=1
        }

        if(item.streamingMovies==="Yes" && (item.customerStatus==="Stayed" || item.customerStatus=="Joined"))
        {
          this.custmovies+=1
        }
        else if(item.streamingMovies==="Yes" &&(item.customerStatus==="Churned"))
        {
          this.churmovies+=1
        }


        // for(e in this.arrchurn)
        // {

        // }

        if(item.churnReason===this.arrchurn[0])
        {
          this.arrchurncount[0]+=1
        }
        if(item.churnReason===this.arrchurn[1])
        {
          this.arrchurncount[1]+=1
        }
        if(item.churnReason===this.arrchurn[2])
        {
          this.arrchurncount[2]+=1
        }
        if(item.churnReason===this.arrchurn[3])
        {
          this.arrchurncount[3]+=1
        }
        if(item.churnReason===this.arrchurn[4])
        {
          this.arrchurncount[4]+=1
        }
        if(item.churnReason===this.arrchurn[5])
        {
          this.arrchurncount[5]+=1
        }
        if(item.churnReason===this.arrchurn[6])
        {
          this.arrchurncount[6]+=1
        }
        if(item.churnReason===this.arrchurn[7])
        {
          this.arrchurncount[7]+=1
        }
        if(item.churnReason===this.arrchurn[8])
        {
          this.arrchurncount[8]+=1
        }
        if(item.churnReason===this.arrchurn[9])
        {
          this.arrchurncount[9]+=1
        }
        if(item.churnReason===this.arrchurn[10])
        {
          this.arrchurncount[10]+=1
        }
        if(item.churnReason===this.arrchurn[11])
        {
          this.arrchurncount[11]+=1
        }
        if(item.churnReason===this.arrchurn[12])
        {
          this.arrchurncount[12]+=1
        }
        if(item.churnReason===this.arrchurn[13])
        {
          this.arrchurncount[13]+=1
        }
        if(item.churnReason===this.arrchurn[14])
        {
          this.arrchurncount[14]+=1
        }
        if(item.churnReason===this.arrchurn[15])
        {
          this.arrchurncount[15]+=1
        }
        if(item.churnReason===this.arrchurn[16])
        {
          this.arrchurncount[16]+=1
        }
        if(item.churnReason===this.arrchurn[17])
        {
          this.arrchurncount[17]+=1
        }
        if(item.churnReason===this.arrchurn[18])
        {
          this.arrchurncount[18]+=1
        }
        if(item.churnReason===this.arrchurn[19])
        {
          this.arrchurncount[19]+=1
        }
        if(item.churnReason===this.arrchurn[20])
        {
          this.arrchurncount[20]+=1
        }


        
      })
      console.log(this.arrchurn)
      console.log(this.arrchurncount)
      console.log(this.custsecurity/7043*100)
      this.custsecurity=Math.round(this.custsecurity/7043*100)
      this.custbackup=Math.round(this.custbackup/7043*100)
      this.custprotection=Math.round(this.custprotection/7043*100)
      this.custtech=Math.round(this.custtech/7043*100)
      this.custtv=Math.round(this.custtv/7043*100)
      this.custmovies=Math.round(this.custmovies/7043*100)


      this.chursecurity=Math.round(this.chursecurity/7043*100)
      this.churbackup=Math.round(this.churbackup/7043*100)
      this.churprotection=Math.round(this.churprotection/7043*100)
      this.churtech=Math.round(this.churtech/7043*100)
      this.churtv=Math.round(this.churtv/7043*100)
      this.churmovies=Math.round(this.churmovies/7043*100)


      

      


      this.churndata={
        labels:this.arrchurn,
        datasets:[
          {label:'',data:this.arrchurncount}
        ],
        
      }
      
      this.churnoptions={
        indexAxis:'y',
        responsive:false,
        plugins:{
          legend:{
            display:false
          }
        },
        scales:{
          y:{
            ticks:{
              color:"rgba(255,255,255,0.7)",
              font:{
                style:'initial'
              }
            }
          }
        } 
           }

    })

    //this.custsecurity = (this.custsecurity/7043)

  }

}
