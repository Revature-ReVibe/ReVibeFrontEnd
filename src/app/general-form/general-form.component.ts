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

  // options = [
  //   'option 1', 'option 2',
  //   'option 3'
  // ];

  model = new User("","", "", "", 1, "","");
  submitted = false;



  onSubmit() {
    this.submitted = true;

// const theUser = new User(18, 'req', 'option 2', 'fieldTwo');
  // console.log("proof the submit was clicked! "+ theUser.name);

  }

  // new user with dummy id we can probably remove

  newUser() {
    console.log(this.model)
    this.userService.updateUser(this.model).subscribe();
    this.router.navigateByUrl("/profile")
    // this.model = new User(42, '', '');
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
}


// export class User {
//   constructor (
//     public id:number,
//     public name:string,
//     public option: string,
//     public fieldTwo?: string
//   ) {}
// }
