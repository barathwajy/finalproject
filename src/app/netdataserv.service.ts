import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { networkperformance } from 'src/datatransfer';

@Injectable({
  providedIn: 'root'
})
export class NetdataservService {

  constructor(private nethttp:HttpClient) { }

  // getnetdata()
  // {
  //   return this.nethttp.get("http://localhost:9095/netdata");

  // }
  public findall(): Observable<networkperformance[]>
  {
    return this.nethttp.get<networkperformance[]>("http://localhost:9095/netdata");
  }
}
