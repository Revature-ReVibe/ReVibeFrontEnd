import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private loginService:LoginService, private formBuilder:FormBuilder,  private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

   }

  ngOnInit(): void {
}

  get f() { console.log(this.loginForm.controls); return this.loginForm.controls; }


  login(){
    console.log(this.f)
    this.loginService.login(this.f.username.value, this.f.password.value).subscribe(user => {
      this.router.navigateByUrl("/")
    });
  }

  newAccount(){
    this.router.navigateByUrl("/registration");
  }

}
