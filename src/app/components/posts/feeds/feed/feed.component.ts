import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Vibe } from "../../../../models/Vibe";
import {MatDialog} from "@angular/material/dialog";
import {ReplyFeedComponent} from "../reply-feed/reply-feed.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  @Input()
  posts!: Vibe[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRepliesDialog(vibe: Vibe) {
    const dialogRef = this.dialog.open(ReplyFeedComponent, {
      data: {vibe: vibe},
      height: 'fit',
      width: '50%'
    });
  }

}
