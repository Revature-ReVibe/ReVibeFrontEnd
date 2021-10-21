import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/Service/login/login.service';

@Component({
  selector: 'app-rev-login',
  templateUrl: './rev-login.component.html',
  styleUrls: ['./rev-login.component.css'],
})
export class RevLoginComponent implements OnInit {    
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl = "";
  error = '';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: LoginService, private http :HttpClient) { 
      // redirect to home if already logged in
      console.log("currentUserValue: " + this.authenticationService.currentUserValue)
      if (this.authenticationService.currentUserValue && this.authenticationService.currentUserValue.token!) {
          this.router.navigate(['/home']);
      }

      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  ngOnInit() {

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
              this.router.navigate(['home'])
  }
}
