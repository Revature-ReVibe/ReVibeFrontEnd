import { Component, Input, OnInit } from '@angular/core';
import { Vibe } from '../../../models/Vibe';
import { Account } from '../../../models/Account';
import { LikeService } from 'src/app/service/like.service';
import { Like } from 'src/app/models/Like';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.css']
})

export class VibeComponent implements OnInit {

  user = new User("", "", "", "", 0, "");

  inputAccount: Account = new Account('ORLY', 'NOWAI');

  likesArray: Like[]= [];

  @Input() inputVibe: Vibe = new Vibe(1,'Hey',0,[],1,'2000',[],undefined,undefined);

 // testVibe: Vibe = new Vibe(1, "Come at me bro!", this.likesArray.length, this.likesArray, 1,
 //  "date", [], 'https://mefunny-test-bucket.s3.amazonaws.com/1634357350701_comeatmebro.jfif')

<<<<<<< Updated upstream
  constructor(private likeService: LikeService, private userService: UserService) {
    this.inputVibe = this.testVibe;
=======
  constructor(private likeService: LikeService, private userService: UserService, public dialog: MatDialog) {

>>>>>>> Stashed changes
    this.likeService.getLikes(this.inputVibe.vibeId)
      .subscribe((likes) => {
        this.likesArray = likes;
        this.inputVibe.likes = this.likesArray;
      });

    this.userService.getUser().subscribe((data)=> {

        this.user = data;
      });

   }

   ngOnInit(
   ){
    console.log(this.inputVibe);
   }

  like() {
    console.log(this.inputVibe);
    this.likeService.postLike(this.inputVibe.vibeId).subscribe((data) => {
      
      console.log(data);
    });
  }

}
