import { Component, OnInit } from '@angular/core';
import { Chart,ChartData,ChartOptions } from 'chart.js';
import { NetdataservService } from 'src/app/netdataserv.service';
import { networkperformance } from 'src/datatransfer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anet1dash',
  templateUrl: './anet1dash.component.html',
  styleUrls: ['./anet1dash.component.css']
})
export class Anet1dashComponent implements OnInit{

  selectednumbers=10;

  selectedregion='Region A';
  
  bandwidthData: ChartData<'line'>;
  bandwidthOptions: ChartOptions;

  netlatencyData: ChartData<'line'>;
  netlatencyOptions: ChartOptions;

  packetlossData: ChartData<'line'>;
  packetlossOptions: ChartOptions;

  jitterData: ChartData<'line'>;
  jitterOptions: ChartOptions;

  bitrateData: ChartData<'line'>;
  bitrateOptions: ChartOptions;

  callsetuptimeData: ChartData<'line'>;
  callsetuptimeOptions: ChartOptions;



  lineChart1Data: ChartData<'line'>;
  lineChart1Options: ChartOptions;

  region_r_time:string[]=[];
  region_r_band:number[]=[];
  region_r_latn:number[]=[];
  region_r_pack:number[]=[];
  region_r_jitt:number[]=[];
  region_r_bitr:number[]=[];
  region_r_cset:number[]=[];
  
  region_a_time:string[]=[];
  region_a_band:number[]=[];
  region_a_latn:number[]=[];
  region_a_pack:number[]=[];
  region_a_jitt:number[]=[];
  region_a_bitr:number[]=[];
  region_a_cset:number[]=[];


  region_b_time:string[]=[];
  region_b_band:number[]=[];
  region_b_latn:number[]=[];
  region_b_pack:number[]=[];
  region_b_jitt:number[]=[];
  region_b_bitr:number[]=[];
  region_b_cset:number[]=[];
  
  region_c_time:string[]=[];
  region_c_band:number[]=[];
  region_c_latn:number[]=[];
  region_c_pack:number[]=[];
  region_c_jitt:number[]=[];
  region_c_bitr:number[]=[];
  region_c_cset:number[]=[];
  
  region_d_time:string[]=[];
  region_d_band:number[]=[];
  region_d_latn:number[]=[];
  region_d_pack:number[]=[];
  region_d_jitt:number[]=[];
  region_d_bitr:number[]=[];
  region_d_cset:number[]=[];

  region_e_time:string[]=[];
  region_e_band:number[]=[];
  region_e_latn:number[]=[];
  region_e_pack:number[]=[];
  region_e_jitt:number[]=[];
  region_e_bitr:number[]=[];
  region_e_cset:number[]=[];
 
  region_f_time:string[]=[];
  region_f_band:number[]=[];
  region_f_latn:number[]=[];
  region_f_pack:number[]=[];
  region_f_jitt:number[]=[];
  region_f_bitr:number[]=[];
  region_f_cset:number[]=[];
  

  region_g_time:string[]=[];
  region_g_band:number[]=[];
  region_g_latn:number[]=[];
  region_g_pack:number[]=[];
  region_g_jitt:number[]=[];
  region_g_bitr:number[]=[];
  region_g_cset:number[]=[];
  

  
  netdata:any;
  networkperform:networkperformance[]


  constructor (private netdataserv:NetdataservService,private http:HttpClient)
  {
    console.log(this.selectedregion)

    // this.netdataserv.findall().subscribe(
    //   data=>{
    //     this.netdata= data
    //   }
    // )


    this.chartrender();
  }


  onSelected(value:string):void{
      this.selectedregion=value;
      console.log(this.selectedregion)
      this.chartrender();
  }

  onSelected1(value:string):void{

    this.selectednumbers = parseInt(value)
    console.log(this.selectednumbers)
    this.chartrender();
  }

  ngOnInit() :void
  {
    
    this.netdataserv.findall().subscribe((data)=>{
      //this.region_a_band = data.map((item)=> item.bandwidth_usage)

    this.lineChart1Data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        { label: 'Mobiles', data: this.region_a_band, tension: 0.5 },
        { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
        { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
        { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
      ],
      
    };
  
    this.lineChart1Options={
      responsive:true,
      plugins:{
      }
      ,      
    };
    })

    console.log(this.region_a_band)

  }


  chartrender()
  {

    console.log(this.selectedregion)

    this.netdataserv.findall().subscribe((data)=>
    {
      data.forEach((item)=>
      {
        if(item.region==="Region A")
        {
          const a = item.timestamp.split(" ")
          this.region_a_time.push(a.at(0))

          this.region_a_band.push(item.bandwidth_usage)
          this.region_a_bitr.push(item.bit_rate)
          this.region_a_cset.push(item.call_setup_time)

          this.region_a_jitt.push(item.jitter)
          this.region_a_latn.push(item.network_latency)
          this.region_a_pack.push(item.packet_loss)
        }
        else if(item.region==="Region B")
        {
          const a = item.timestamp.split(" ")
          this.region_b_time.push(a.at(0))


          this.region_b_band.push(item.bandwidth_usage)
          this.region_b_bitr.push(item.bit_rate)
          this.region_b_cset.push(item.call_setup_time)

          this.region_b_jitt.push(item.jitter)
          this.region_b_latn.push(item.network_latency)
          this.region_b_pack.push(item.packet_loss)

        }
        else if(item.region==="Region C")
        {
          const a = item.timestamp.split(" ")
          this.region_c_time.push(a.at(0))

          this.region_c_band.push(item.bandwidth_usage)
          this.region_c_bitr.push(item.bit_rate)
          this.region_c_cset.push(item.call_setup_time)

          this.region_c_jitt.push(item.jitter)
          this.region_c_latn.push(item.network_latency)
          this.region_c_pack.push(item.packet_loss)

        }
        else if(item.region==="Region D")
        {
          const a = item.timestamp.split(" ")
          this.region_d_time.push(a.at(0))

          this.region_d_band.push(item.bandwidth_usage)
          this.region_d_bitr.push(item.bit_rate)
          this.region_d_cset.push(item.call_setup_time)

          this.region_d_jitt.push(item.jitter)
          this.region_d_latn.push(item.network_latency)
          this.region_d_pack.push(item.packet_loss) 
        }
        else if(item.region==="Region E")
        {
          const a = item.timestamp.split(" ")
          this.region_e_time.push(a.at(0))

          this.region_e_band.push(item.bandwidth_usage)
          this.region_e_bitr.push(item.bit_rate)
          this.region_e_cset.push(item.call_setup_time)

          this.region_e_jitt.push(item.jitter)
          this.region_e_latn.push(item.network_latency)
          this.region_e_pack.push(item.packet_loss)
        }
        else if(item.region==="Region F")
        {
          const a = item.timestamp.split(" ")
          this.region_f_time.push(a.at(0))

          this.region_f_band.push(item.bandwidth_usage)
          this.region_f_bitr.push(item.bit_rate)
          this.region_f_cset.push(item.call_setup_time)

          this.region_f_jitt.push(item.jitter)
          this.region_f_latn.push(item.network_latency)
          this.region_f_pack.push(item.packet_loss)
        }
        else if(item.region==="Region G")
        {
          const a = item.timestamp.split(" ")
          this.region_g_time.push(a.at(0))

          this.region_g_band.push(item.bandwidth_usage)
          this.region_g_bitr.push(item.bit_rate)
          this.region_g_cset.push(item.call_setup_time)

          this.region_g_jitt.push(item.jitter)
          this.region_g_latn.push(item.network_latency)
          this.region_g_pack.push(item.packet_loss)
        }


      })

      if(this.selectedregion==="Region A")
      {

        this.region_r_band=this.region_a_band
        this.region_r_bitr=this.region_a_bitr
        this.region_r_cset=this.region_a_cset
        this.region_r_jitt=this.region_a_jitt
        this.region_r_latn=this.region_a_latn
        this.region_r_pack=this.region_a_pack

        this.region_r_time=this.region_a_time
      }
      else if(this.selectedregion==="Region B")
      {
        this.region_r_band=this.region_b_band
        this.region_r_bitr=this.region_b_bitr
        this.region_r_cset=this.region_b_cset
        this.region_r_jitt=this.region_b_jitt
        this.region_r_latn=this.region_b_latn
        this.region_r_pack=this.region_b_pack
        
        this.region_r_time=this.region_b_time


      }
      else if(this.selectedregion==="Region C")
      {
        this.region_r_band=this.region_c_band
        this.region_r_bitr=this.region_c_bitr
        this.region_r_cset=this.region_c_cset
        this.region_r_jitt=this.region_c_jitt
        this.region_r_latn=this.region_c_latn
        this.region_r_pack=this.region_c_pack
        
        this.region_r_time=this.region_c_time

      }

      else if(this.selectedregion==="Region D")
      {
        this.region_r_band=this.region_d_band
        this.region_r_bitr=this.region_d_bitr
        this.region_r_cset=this.region_d_cset
        this.region_r_jitt=this.region_d_jitt
        this.region_r_latn=this.region_d_latn
        this.region_r_pack=this.region_d_pack
      
        this.region_r_time=this.region_d_time

      }
      else if(this.selectedregion==="Region E")
      {
        this.region_r_band=this.region_e_band
        this.region_r_bitr=this.region_e_bitr
        this.region_r_cset=this.region_e_cset
        this.region_r_jitt=this.region_e_jitt
        this.region_r_latn=this.region_e_latn
        this.region_r_pack=this.region_e_pack
        
        this.region_r_time=this.region_e_time

      }
      else if(this.selectedregion==="Region F")
      {
        this.region_r_band=this.region_f_band
        this.region_r_bitr=this.region_f_bitr
        this.region_r_cset=this.region_f_cset
        this.region_r_jitt=this.region_f_jitt
        this.region_r_latn=this.region_f_latn
        this.region_r_pack=this.region_f_pack
      
        this.region_r_time=this.region_f_time

      }
      else if(this.selectedregion==="Region G")
      {
        this.region_r_band=this.region_g_band
        this.region_r_bitr=this.region_g_bitr
        this.region_r_cset=this.region_g_cset
        this.region_r_jitt=this.region_g_jitt
        this.region_r_latn=this.region_g_latn
        this.region_r_pack=this.region_g_pack
        
        this.region_r_time=this.region_g_time

      }



      //  Bandwidth Graph 
      this.bandwidthData= {
        labels: this.region_r_time.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length),
        datasets: [
          { label: 'Bandwidth', data: this.region_r_band.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length), tension: 0.5, },
        ],
        
      };

      this.bandwidthOptions={
        responsive:true,
        plugins:{
        },        
      };

      // Network Latency Graph

      this.netlatencyData= {
        labels: this.region_r_time.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length),
        datasets: [
          { label: 'Network Latency', data: this.region_r_latn.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length), tension: 0.5, },
        ],
        
      };

      this.netlatencyOptions={
        responsive:true,
        plugins:{
        },        
      };
  
      // Packet Loss Graph

      this.packetlossData= {
        labels: this.region_r_time.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length),
        datasets: [
          { label: 'Packet Loss', data: this.region_r_pack.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length), tension: 0.5, },
        ],
        
      };

      this.packetlossOptions={
        responsive:true,
        plugins:{
        },        
      };
      // Jitter Graph

      this.jitterData= {
        labels: this.region_r_time.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length),
        datasets: [
          { label: 'Jitter Graph', data: this.region_r_jitt.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length), tension: 0.5, },
        ],
        
      };

      this.jitterOptions={
        responsive:true,
        plugins:{
        },        
      };
      // Bit Rate Graph

      this.bitrateData= {
        labels: this.region_r_time.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length),
        datasets: [
          { label: 'Bit Rate', data: this.region_r_bitr.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length), tension: 0.5, },
        ],
        
      };

      this.bitrateOptions={
        responsive:true,
        plugins:{
        },        
      };
      // Call Setup time Graph

      this.callsetuptimeData= {
        labels: this.region_r_time.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length),
        datasets: [
          { label: 'Call Setup time', data: this.region_r_cset.slice(this.region_r_band.length-this.selectednumbers,this.region_r_band.length), tension: 0.5, },
        ],
        
      };

      this.callsetuptimeOptions={
        responsive:true,
        plugins:{
        },        
      };






    })


  }




  

}
