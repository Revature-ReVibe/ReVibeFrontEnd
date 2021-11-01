import {Component, Inject, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Account} from "../../../../models/Account";
import {NewReplyComponent} from "../../new-reply/new-reply.component";

const postCount: number = 5;

@Component({
  selector: 'app-reply-feed',
  templateUrl: './reply-feed.component.html',
  styleUrls: ['./reply-feed.component.css']
})
export class ReplyFeedComponent implements OnInit {

  parentVibe!:Vibe;
  replies: Vibe[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.parentVibe = data.vibe;

    //Dummy data
    for(let i = 0; i < postCount; i++) {
      let newVibe: Vibe = new Vibe(i, "Message", 0, [], 1, "date", []);
      this.replies.push(newVibe);
    }
  }

  ngOnInit(): void {
  }

  openNewReplyDialog() {
    const dialogRef = this.dialog.open(NewReplyComponent, {
      data: {parent: this.parentVibe}
    });
  }

}
