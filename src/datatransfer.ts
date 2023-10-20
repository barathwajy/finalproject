export class networkperformance
{
   /* forEach(arg0: (values: any) => void) {
      throw new Error('Method not implemented.');
    }*/
    //constructor(
    sno:number|undefined
    timestamp:string|undefined
    region:string|undefined
    bandwidth_usage:number|undefined
    network_latency:number|undefined
    packet_loss:number|undefined
    jitter:number|undefined
    bit_rate:number|undefined
    call_setup_time:number|undefined

}

export class subscriber_data
{
   premiumTechSupport:string|undefined
   deviceProtectionPlan:string|undefined
   totalExtraDataCharges:number|undefined
   totalLongDistanceCharges:number|undefined
   internetService:string|undefined
   phoneService:string|undefined
   internetType:string|undefined
   tenureinMonths:number|undefined
   onlineBackup:string|undefined
   dateofJoining:string|undefined
   customerID:string|undefined
   multipleLines:string|undefined
   offer:string|undefined
   onlineSecurity:string|undefined
   streamingMusic:string|undefined
   streamingMovies:string|undefined
   streamingTV:string|undefined
   totalRefunds:number|undefined
   unlimitedData:string|undefined
   monthlyCharge:number|undefined
   totalCharges:number|undefined
   totalRevenue:number|undefined
   contract:string|undefined
   customerStatus:string|undefined
   churnReason:string|undefined
   churnCategory:string|undefined


}


export class serviceutil{

   sno:number|undefined
   date:string|undefined
   timeofDay:string|undefined
   callsMade:number
   sms:number
   dataUsage:number|undefined

}


export class LoginRequest{
   email:string=""
   password:string=""

   loginset(email:string,password:string)
   {
       this.email=email;
       this.password=password;
   }
}