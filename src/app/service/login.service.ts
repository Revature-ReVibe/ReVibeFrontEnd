import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginObj } from '../Models/loginObj';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // this needs to be changed based on the backend
  // RefrenceSheet.getUrl() is just "http://localhost:8080"
  private url:String = environment.serverLocationURL;
  private currentUserSubject: BehaviorSubject<loginObj>;
  public currentUser: Observable<loginObj>;

  constructor(private http:HttpClient) {
    let isNotNull = localStorage.getItem('ReVibeSocialMediaApp-LocalStorageLocation');
    if(isNotNull) {
      this.currentUserSubject = new BehaviorSubject<loginObj>(JSON.parse(isNotNull));
    } else {
      this.currentUserSubject = new BehaviorSubject<loginObj>(new loginObj);
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }


  login(username: string, password: string): Observable<string> {
    return this.http.post<any>(this.url + `/login`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('ReVibeSocialMediaApp-LocalStorageLocation', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return "other";
        }));
  }

  next(){
    this.currentUserSubject.next(new loginObj);
  }
}
