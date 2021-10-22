import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private loginService:LoginService, private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

   }

  ngOnInit(): void {
}

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  login(){
    this.loginService.login(this.f.username.value, this.f.password.value).subscribe();
  }

  newAccount(){
    // TODO: link to the new account location
  }

}
