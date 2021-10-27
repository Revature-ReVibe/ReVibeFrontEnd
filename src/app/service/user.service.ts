import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;
  

  constructor() { }

  findUser(username: string):Observable<User>{
    return this.http.get('/api/users/' + username).pipe(map((user:User)=>user))
  }
}
