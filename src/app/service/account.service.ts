import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { newAccount} from '../models/newAccount';
import { environment } from 'src/environments/environment';
import { Account } from '../models/Account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private httpClient:HttpClient) { }

  submitForm(account: newAccount){
   return this.httpClient.post<any>(environment.submitForm, account) as Observable<Account[]>
  }

}
