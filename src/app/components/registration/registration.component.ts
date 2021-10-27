import { RegistrationService } from './../../service/registration.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  account = new Account("username","password",'token') 
  //account: Account = {
    //id: 0,
  //  username: '',
  //  password: ''
    //name: ''
 // }

  newAccount(): void {
    this.registrationService.newAccount(this.account).subscribe()
  }

}
