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

  user = new User("changedUsername", "changedname", "changedname@changedemail.com", "https://mefunny-test-bucket.s3.amazonaws.com/1634357235922_orly.jpg", 1738, "changedpassword")
  private sub: Subscription = new Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      
    this.getUser();
    this.updateUser();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getUser()
  {
    return this.userService.getUser().subscribe();
  }

  updateUser()
  {
    return this.userService.updateUser().subscribe();
  }

}
