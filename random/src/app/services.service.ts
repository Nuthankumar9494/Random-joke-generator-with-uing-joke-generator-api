import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { 

  }
    getdata() :Observable<any>{
      return this.http.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
    }
}
