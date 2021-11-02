import { Component, Input, OnInit } from '@angular/core';
import { Vibe } from '../../../models/Vibe';
import { Account } from '../../../models/Account';
import { LikeService } from 'src/app/service/like.service';
import { Like } from 'src/app/models/Like';
import {ReplyFeedComponent} from "../feeds/reply-feed/reply-feed.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.css']
})

export class VibeComponent implements OnInit {


  inputAccount: Account = new Account('ORLY', 'NOWAI');

  likesArray: Like[]= [];

  @Input() inputVibe!: Vibe;

  testVibe: Vibe = new Vibe(1, "", this.likesArray.length, this.likesArray, 0, "", [], '')

  constructor(private likeService: LikeService, public dialog: MatDialog) {
    this.inputVibe = this.testVibe;
    this.likeService.getLikes(this.inputVibe.vibeId)
      .subscribe((likes) => {
        this.likesArray = likes;
        this.inputVibe.likes = this.likesArray;
    });
    
   }

  ngOnInit(): void {
  }

  like() {
    this.likeService.postLike(this.inputVibe.vibeId).subscribe();
  }

  openRepliesDialog() {
    const dialogRef = this.dialog.open(ReplyFeedComponent, {
      data: {vibe: this.inputVibe},
      height: '80%',
      width: '50%'
    });
  }

}
