import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

import { FormBuilder,FormGroup } from '@angular/forms';
import { subscriber_data } from 'src/datatransfer';
import { SubdataservService } from '../subdataserv.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {

  subscriberForm: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private subdatasend:SubdataservService)
  {
    this.subscriberForm = this.formBuilder.group({
      premiumTechSupport: '',
      deviceProtectionPlan: '',
      totalExtraDataCharges: '98',
      totalLongDistanceCharges: '',
      internetService: 'Yes',
      phoneService: 'Yes',
      internetType: 'Fiber Optic',
      tenureinMonths: '12',
      onlineBackup: '',
      dateofJoining: '',
      customerID: '',
      multipleLines: 'Yes',
      offer: '',
      onlineSecurity: '',
      streamingMusic: 'Yes',
      streamingMovies: '',
      streamingTV: '',
      totalRefunds: '',
      unlimitedData: 'Yes',
      monthlyCharge: '617',
      totalCharges: '98',
      totalRevenue: '1298.5',
      contract: '',
      customerStatus: '',
      churnReason: '',
      churnCategory: ''
      // Add more form controls here
    });
  }

  ngOnInit() {
    // this.subscriberForm = this.formBuilder.group(new subscriber_data());
  }



  onSubmit()
  {
    console.log(this.subscriberForm.value);
    const formdata = this.subscriberForm.value;

    this.subdatasend.save(formdata).subscribe(
      (response)=>
      {
        console.log('Data posted successfully:', response)
      }
      ,
      (error) => {
        console.error('Error posting data:', error);
      }
    );

  }


}
