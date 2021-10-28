import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;
  

  constructor(private httpClient: HttpClient) { }

  findUser(username: string):Observable<User>{
    return this.http.get('/api/users/' + username).pipe(map((user:User)=>user))
  }

  getUser(){
    return this.httpClient.get(environment.getUser);
  }

}
