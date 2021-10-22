import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { LoginService } from '../service/loginService/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string="";
  password:string="";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  // checkLogin(){
  //   this.logServ.login(this.username, this.password) 
  //  }

}
