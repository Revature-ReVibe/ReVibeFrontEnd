import { Component, OnInit } from '@angular/core';
import { AccountService} from '../../service/account.service';
import { Account } from 'src/app/models/Account';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name:String='';
  username:String='';
  field:String='';
  
  constructor(private accountService:AccountService, private httpClient:HttpClient) { }
  
  ngOnInit(): void {
  }
  
  clearForm() {
    if(!this.name) {
      alert("please enter name");
      return;
    }
    this.name='';
    this.username='';
    this.field='';
  }
  
  account = new Account("sampleUserName", "samplePassword");
  
  submitForm() {
    return this.accountService.submitForm(this.account).subscribe((data) => console.log(data), (error) => { console.log("Error handler was invoked")})
  
    }
  }
  