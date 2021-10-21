import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { 
    console.log("currentUserValue: " + this.loginService.currentUserValue)
    if (!this.loginService.currentUserValue) {
      console.log("inside first if")
        this.router.navigate(['/login']);
        return;
    } else if(!this.loginService.currentUserValue.token) {
      console.log("inside second if")
      this.router.navigate(['/login']);
      return;
    }

  }

  ngOnInit(): void {
  }

}
