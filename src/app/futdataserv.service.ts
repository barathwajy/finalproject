import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceutil } from 'src/datatransfer';

@Injectable({
  providedIn: 'root'
})
export class FutdataservService {

  constructor(private servhttp:HttpClient) { }

  
  public findall(): Observable<serviceutil[]>
  {
    return this.servhttp.get<serviceutil[]>("http://localhost:9095/servutildata");
  }

}
