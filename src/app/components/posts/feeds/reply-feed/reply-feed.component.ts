import {Component, Inject, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Account} from "../../../../models/Account";

const postCount: number = 5;

@Component({
  selector: 'app-reply-feed',
  templateUrl: './reply-feed.component.html',
  styleUrls: ['./reply-feed.component.css']
})
export class ReplyFeedComponent implements OnInit {

  parentVibe!:Vibe;
  replies: Vibe[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.parentVibe = data.vibe;

    //Dummy data
    for(let i = 0; i < postCount; i++) {
      let newVibe: Vibe = new Vibe(i, new Account('usr', 'pswrd', ''), 'Message', []);
      this.replies.push(newVibe);
    }
  }

  ngOnInit(): void {
  }

}
