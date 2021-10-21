import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  static userAccount:Account = new Account("", "");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //once login is ready then will implement logout
  logout(){
    localStorage.removeItem('userAccount');
    this.router.navigate['/login'];
    // this.aServ.signout();

  }

}
