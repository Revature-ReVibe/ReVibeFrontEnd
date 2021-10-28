import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginObj } from '../../Models/loginObj';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // this needs to be changed based on the backend
  // RefrenceSheet.getUrl() is just "http://localhost:8080"
  private url:String = environment.submitForm.toString() + "/jwt";
  private currentUserSubject: BehaviorSubject<loginObj>;

  constructor(private http:HttpClient) {
    let isNotNull = localStorage.getItem('ReVibeSocialMediaApp-LocalStorageLocation');
    if(isNotNull) {
      this.currentUserSubject = new BehaviorSubject<loginObj>(JSON.parse(isNotNull));
    } else {
      this.currentUserSubject = new BehaviorSubject<loginObj>(new loginObj);
    }
  }


  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(this.url + `/login`, { username, password })
        .pipe(map(jwt => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('ReVibeSocialMediaApp-LocalStorageLocation', JSON.stringify(jwt));
            return "other";
        }));
  }
}
