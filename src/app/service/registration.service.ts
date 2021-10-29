import { newAccount } from '../models/newAccount';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  url: string = environment.submitForm+"/account/new";

  newAccount(account: newAccount): Observable<Object> {
    console.log(account);
    return this.http.post<newAccount>(this.url, account, this.httpOptions);
  }
}
