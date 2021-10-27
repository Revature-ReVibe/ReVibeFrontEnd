import { Injectable } from '@angular/core';
import {HttpHandler, HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { newAccount} from '../models/newAccount';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private httpClient:HttpClient) { }

  submitForm(account: newAccount){
   return this.httpClient.post<any>(environment.submitForm, account) as Observable<Account[]>
  }

}
