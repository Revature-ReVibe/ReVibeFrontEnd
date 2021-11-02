import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { User } from '../models/User';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})

export class GeneralFormComponent implements OnInit {
  model = new User("","", "", "", 1, "","");
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }


  newUser() {
    console.log(this.model)
    this.userService.updateUser(this.model).subscribe();
    this.router.navigateByUrl("/")
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
}
