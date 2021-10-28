import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newAccount } from 'src/app/models/newAccount';
import { ResetPasswordService } from 'src/app/service/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm:FormGroup;

  constructor(private resetService:ResetPasswordService, private formBuiilder:FormBuilder, private router:Router) { 
    this.resetForm = this.formBuiilder.group({
      email: ['', Validators.required]
    })
  }

    // convenience getter for easy access to form fields
    get f() { return this.resetForm.controls; }

    account: newAccount = {
      email: this.f.email.value,
      username: '',
      password: '',
      name: '',
      profilePic: '',
    }

  ngOnInit(): void {
  }

  resetPassword(){
    this.resetService.resetPassword(this.account).subscribe(user => {

    });
    this.router.navigateByUrl("/login")
  }

}