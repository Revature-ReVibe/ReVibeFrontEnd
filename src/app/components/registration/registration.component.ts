import { RegistrationService } from './../../service/registration.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  account: Account = {
    email: '',
    username: '',
    password: '',
    name: '',
    profilePic: '',
  }

  newAccount(): void {
    this.registrationService.newAccount(this.account).subscribe()
    //this.router.navigate(['/login'])
  }

}
