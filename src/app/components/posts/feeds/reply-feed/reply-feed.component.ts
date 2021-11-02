import {Component, Inject, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {NewReplyComponent} from "../../new-reply/new-reply.component";
import {VibeService} from "../../../../service/vibe.service";


@Component({
  selector: 'app-reply-feed',
  templateUrl: './reply-feed.component.html',
  styleUrls: ['./reply-feed.component.css']
})
export class ReplyFeedComponent implements OnInit {

  parentVibe!:Vibe;
  replies: Vibe[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private vibeService: VibeService) {
    this.parentVibe = data.vibe;

  }

  ngOnInit(): void {
    this.refreshData();
  }

  openNewReplyDialog() {
    const dialogRef = this.dialog.open(NewReplyComponent, {
      data: {parent: this.parentVibe}
    });

    dialogRef.afterClosed().subscribe(
      () => {
        this.refreshData();
      }
    )
  }

  refreshData() {
    this.vibeService.getAllReplies(this.parentVibe.vibeId).subscribe(
      (data) => {
        this.replies = data;
      }
    );
  }

}
