import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private url:String = environment.serverLocationURL;

  constructor(private http:HttpClient) { }

  resetPassword(user:User): Observable<string>{
    return this.http.post<any>(this.url + "/account/resetpass", user);
  }
}
