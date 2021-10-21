import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  //   console.log(this.username);
  //   if(this.username=="admin" && this.password=="password"){
  //     console.log("you are logged in");
  //     this.route.navigate['/home']
  //   }else{
  //     console.log("wrong input");
  //   }
  // }

}
