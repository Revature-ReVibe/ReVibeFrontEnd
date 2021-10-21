import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseURL } from 'src/app/Models/Classes/baseURL';
import { User } from 'src/app/Models/Classes/User';

@Injectable({providedIn: 'root'})
export class LoginService {
  private url:String = baseURL.getUrl() + "/users/";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    let isNotNull = localStorage.getItem('currentUser');
    if(isNotNull) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(isNotNull));
    } else {
      this.currentUserSubject = new BehaviorSubject<User>(new User);
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<string> {
      return this.http.post<any>(this.url + `/login`, { username, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return "other";
          }));
  }

  authenticate(): Observable<boolean>{
    return this.http.get<boolean>(this.url + '/authenticate');
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(new User);
  }
}
