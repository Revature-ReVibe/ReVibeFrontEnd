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

  login(username:string, password:string){
    console.log(username);
    if(username=="naresh" && password=="nigam"){
      console.log("welcome")
    }else{
      console.log("wrong data");
    }
  }
}
