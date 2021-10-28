import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { newAccount } from '../models/newAccount';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private url:String = environment.serverLocationURL;

  public httpOptions = {
    headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*" }),
  };

  constructor(private http:HttpClient) { }

  resetPassword(account:newAccount): Observable<string>{
    return this.http.post<any>(this.url + "/account/resetpass", account, this.httpOptions)
  }
}
