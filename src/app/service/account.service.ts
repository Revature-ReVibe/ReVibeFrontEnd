import { Injectable } from '@angular/core';
import {HttpHandler, HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Account} from '../models/Account';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // userAccount = new Subject<Account>();

  constructor(private httpClient:HttpClient) { }

  submitForm(Account:{}){
   return this.httpClient.post<any>(environment.submitForm, Account) as Observable<Account[]>
   console.log("run request");
  }

  //will implement after the login is ready. 
  // signout(){
  //   this.userAccount.next();
  // }
}
