import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AccountService } from '../account.service';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  isloggedIn=false;
  
  // usr:User= new User("", "", "acbd")
  

  constructor(private router:Router, private login:LoginService) { }


  // login(){
  //   localStorage.setItem('usr', JSON.stringify(this.usr));
  // }


  signout(){
    this.isloggedIn=false;
    console.log("you are logged out");
    localStorage.removeItem('ReVibeSocialMediaApp-LocalStorageLocation'); //onnce we set the localStorage in login response, I will call that item.
    //this.login.currentUser.next();
    this.router.navigate['/login'];

  }

}
