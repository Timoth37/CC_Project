import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currency} from "../models/currency.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class ApiServices {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  async login(data: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    };
    const response = await fetch('http://localhost/api/users/login', options);
    return response.json();
  }


  async register(data: any){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    await this.http.post(`http://localhost/api/users/register`, JSON.stringify(data), {headers: headers})
      .subscribe();
  }


  getCurrencies(): Observable<Currency[]>{
    const jwt = this.cookieService.get('jwt')
    let headers = new HttpHeaders();
    if(jwt) {
      headers = new HttpHeaders({
        'Authorization':  `Bearer ${jwt}`
      })
    }
    return this.http.get<any>(`http://localhost/api/currency/findAll`, {headers: headers})
  }

  getHistory(): Observable<any[]>{
    const jwt = this.cookieService.get('jwt')
    let headers = new HttpHeaders();
    if(jwt) {
      headers = new HttpHeaders({
        'Authorization':  `Bearer ${jwt}`
      })
    }
    return this.http.get<any>(`http://localhost/api/currency/history`, {headers: headers})
  }

  async translate(data: any){
    const jwt = this.cookieService.get('jwt')
    let headers = new Headers();
    if(jwt){
      headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization':  `Bearer ${jwt}`
      })
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    };
    const response = await fetch('http://localhost/api/currency', options);
    return response.json();
  }

  async getText(){
    const options = {
      method: 'GET'
    };
    const response = await fetch('http://localhost/api/users', options);
    return response.json();
  }
}
