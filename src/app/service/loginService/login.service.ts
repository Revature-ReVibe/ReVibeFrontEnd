import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userToken:string="abc";
  user = new Subject<User>();


  constructor() { }
}
