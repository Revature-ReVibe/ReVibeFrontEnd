import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
  }

  resetPassword(){
    this.resetService.resetPassword(this.f.email.value).subscribe();

    // Uncomment when back and front are connected here, this is meant to redirect user back to login after 
    // reset is successful
    // this.router.navigateByUrl("/login")
  }

}
