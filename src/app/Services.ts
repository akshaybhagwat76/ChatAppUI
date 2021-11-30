import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { LoginRoute } from '../route';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'accept: text/plain'
  })
}

@Injectable({
  providedIn: 'root'
})
export class Services {
  result: string;

  constructor(private _http: HttpClient) {

  }
  getCustomerList(): Observable<any> {
    return this._http.get<any>("https://localhost:44307/api/chat");
  }
  SearchCustomer(prefix): Observable<any> {
    return this._http.get<any>("https://localhost:44307/api/chat/SearchCustomer?prefix="+prefix);
  }
  SendMessages(msg:any): Observable<any> {
    return this._http.post<any>("https://localhost:44307/api/chat/ChatCustomer",msg);
  }
  GetMessages(id:any): Observable<any> {
    return this._http.get<any>("https://localhost:44307/api/chat/GetMessages?id="+id);
  }
  GetCustomerAllMsg(id:any): Observable<any> {
    return this._http.get<any>("https://localhost:44307/api/chat/GetCustomerAllMsg?id="+id);
  }
//   checkLogin() {
//     return localStorage.getItem("currentUser") ? true : false;
//   }

//   setUserDetails(user: any) {
//     localStorage.setItem("currentUser", JSON.stringify(user));
//   }

//   getUserDetails() {
//     return localStorage.getItem("currentUser");
//   }
//   logOut() {
//     localStorage.removeItem("currentUser");
//   }
}
