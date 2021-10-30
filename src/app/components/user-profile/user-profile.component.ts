import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string = " ";
  user = new User("", "", "", "", 0, "")
  private sub: Subscription = new Subscription;
  activatedRoute: any;
  


  constructor(private userService: UserService) { }

  ngOnInit(): void {
      
    this.getUser();
    // this.updateUser();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getUser()
  {
    return this.userService.getUser().subscribe((data)=>
    {
      console.log(data)
      this.user = data;
      //console.log(user)   
    });
  }

  // updateUser()
  // {
  //   return this.userService.updateUser().subscribe();
  // }

}