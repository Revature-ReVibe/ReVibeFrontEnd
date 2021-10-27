import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})

export class GeneralFormComponent implements OnInit {

  options = [
    'option 1', 'option 2',
    'option 3'
  ];

  model = new User(10, 'dummy name', this.options[0], 'non-req field');
  submitted = false;



  onSubmit() {
    this.submitted = true;

const theUser = new User(18, 'req', 'option 2', 'fieldTwo');
  console.log("proof the submit was clicked! "+ theUser.name);

  }

  // new user with dummy id we can probably remove

  newUser() {
    this.model = new User(42, '', '');
  }

  constructor() { }

  ngOnInit(): void {
  }
}


export class User {
  constructor (
    public id:number,
    public name:string,
    public option: string,
    public fieldTwo?: string
  ) {}
}
