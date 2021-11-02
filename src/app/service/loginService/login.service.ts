import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginObj } from '../../models/loginObj';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // this needs to be changed based on the backend
  // RefrenceSheet.getUrl() is just "http://localhost:8080"
  private url:String = environment.submitForm.toString() + "/jwt";
  constructor(private http:HttpClient) {
 
  }


  login(username: string, password: string): Observable<string> {
    return this.http.post<any>(this.url + `/login`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('ReVibeSocialMediaApp-LocalStorageLocation', user.jwt);
            return "other";
        }));
  }

  
}
