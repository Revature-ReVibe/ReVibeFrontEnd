import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private url:String = environment.serverLocationURL;

  constructor(private http:HttpClient) { }

  resetPassword(email:string): Observable<string>{
    return this.http.post<any>(this.url + "/resetpass", {email})
  }
}
