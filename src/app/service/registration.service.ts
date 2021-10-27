import { newAccount } from '../models/newAccount';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/account/new';

  newAccount(account: newAccount): Observable<Object> {
    console.log(account);
    return this.http.post<newAccount>(this.url, account, this.httpOptions);
  }
}
