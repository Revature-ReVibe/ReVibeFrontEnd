import { Component, Input, OnInit } from '@angular/core';
import { Vibe } from '../../../models/Vibe';
import { Account } from '../../../models/Account';
import { LikeService } from 'src/app/service/like.service';
import { Like } from 'src/app/models/Like';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';
import {ReplyFeedComponent} from "../feeds/reply-feed/reply-feed.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.css']
})

export class VibeComponent implements OnInit {

  user = new User("", "", "", "", 0, "");

  inputAccount: Account = new Account('ORLY', 'NOWAI');

  likesArray: Like[]= [];

  @Input() inputVibe!: Vibe;

  testVibe: Vibe = new Vibe(1, "Come at me bro!", this.likesArray.length, this.likesArray, 0, "date", [], 'https://mefunny-test-bucket.s3.amazonaws.com/1634357350701_comeatmebro.jfif')

  constructor(private likeService: LikeService, private userService: UserService, public dialog: MatDialog) {
    this.inputVibe = this.testVibe;
    this.likeService.getLikes(this.inputVibe.vibeId)
      .subscribe((likes) => {
        this.likesArray = likes;
        this.inputVibe.likes = this.likesArray;
      });

    this.userService.getUser().subscribe((data)=> {

        console.log(data)
        this.user = data;
      });

   }

  ngOnInit(): void {
  }

  like() {
    this.likeService.postLike(this.inputVibe.vibeId);
  }

  openRepliesDialog() {
    const dialogRef = this.dialog.open(ReplyFeedComponent, {
      data: {vibe: this.inputVibe},
      height: '80%',
      width: '50%'
    });
  }

}
