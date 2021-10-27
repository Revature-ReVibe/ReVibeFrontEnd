import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../models/Account';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private httpClient:HttpClient) { }

  submitForm(Account:{}){
   return this.httpClient.post<any>(environment.serverLocationURL, Account) as Observable<Account[]>
  }

}
