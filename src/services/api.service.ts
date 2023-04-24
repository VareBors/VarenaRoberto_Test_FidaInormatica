import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from 'src/Interfaces/ApiData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  public sendToApi (apiData : ApiData): Observable<any>  {
    var url = 'http://localhost:4316/api/testapi/save'; 

    return this.httpClient.post(url,apiData);
  }
}
