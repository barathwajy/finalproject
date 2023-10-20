import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subscriber_data } from 'src/datatransfer';

@Injectable({
  providedIn: 'root'
})
export class SubdataservService {

  constructor(private subhttp:HttpClient) { }

  // getnetdata()
  // {
  //   return this.subhttp.get("http://localhost:9095/subdata");

  // }
  public findall(): Observable<subscriber_data[]>
  {
    return this.subhttp.get<subscriber_data[]>("http://localhost:9095/subdata");
  }

  public save(subscribers_datas:subscriber_data)
  {
    return this.subhttp.post<subscriber_data>("http://localhost:9095/postsubdata",subscribers_datas);
  }



}
