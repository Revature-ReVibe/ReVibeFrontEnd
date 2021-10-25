import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/service/account.service';
import { LogoutService } from 'src/app/service/logoutService/logout.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private logout:LogoutService) { }

  ngOnInit(): void {
  }
  
  signout(event:Event){
    event.preventDefault();
    this.logout.signout();
  }

}
