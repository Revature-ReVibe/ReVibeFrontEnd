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

  username: string = "username ";
  user = new User("username", "name", "email@email", "https://mefunny-test-bucket.s3.amazonaws.com/1634357235922_orly.jpg", 1, " ");
  // private sub: Subscription = new Subscription;
  // activatedRoute: any;
  // userService: any;
  


  constructor() { }

  ngOnInit(): void {
      //this.sub = this.activatedRoute.params.subscribe((params: { [x: string]: string; }) =>{
      //this.username = params['username'];
      //this.userService.findUser(this.username).pipe(map((user:User) => this.user = user)).subscribe()
    //});
  }

  ngOnDestroy(){
    // this.sub.unsubscribe();
  }

}
