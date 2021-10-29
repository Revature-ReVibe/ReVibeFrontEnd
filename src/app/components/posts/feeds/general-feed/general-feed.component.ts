import {Component, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MatDialog} from "@angular/material/dialog";
import {NewVibeComponent} from "../../new-vibe/new-vibe.component";
import {Account} from "../../../../models/Account";

const postCount: number = 30;

@Component({
  selector: 'app-general-feed',
  templateUrl: './general-feed.component.html',
  styleUrls: ['./general-feed.component.css']
})
export class GeneralFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor(public dialog: MatDialog) {
    //Dummy data, should be replaced with fetching data from server (get all posts)
    for(let i = 0; i < postCount; i++) {
      let newVibe: Vibe = new Vibe(i, new Account('usr', 'pswrd', ''), 'Message', []);
      this.vibes.push(newVibe);
    }
  }

  ngOnInit(): void {
  }

  openNewVibeDialog() {
    const dialogRef = this.dialog.open(NewVibeComponent, {
      backdropClass: 'backdropBackground',
      hasBackdrop: true
    });
  }

}
