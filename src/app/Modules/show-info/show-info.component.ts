import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Classes/User';
import { LoginService } from 'src/app/Service/login/login.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  user:string = "";
  authenticated = false;

  constructor(private auth:LoginService, private rout:Router, private authenticationService: LoginService) {

   }

  ngOnInit(): void {
    var temp = localStorage.getItem('currentUser');
    if(temp)
      this.user = temp;
  }



  logout() {
    console.log("hit the logout button");
    this.auth.logout();
    this.rout.navigate(['/login'])
  }

  authenticate() {
    this.authenticationService.authenticate().subscribe(work => this.authenticated = work)
  }

}
