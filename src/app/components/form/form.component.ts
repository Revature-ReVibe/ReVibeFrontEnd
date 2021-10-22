import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
name:String='';
username:String='';
field:String='';


  constructor() { }

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
}
