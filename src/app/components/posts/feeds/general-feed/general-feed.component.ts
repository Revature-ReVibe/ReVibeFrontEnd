import {Component, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MatDialog} from "@angular/material/dialog";
import {NewVibeComponent} from "../../new-vibe/new-vibe.component";

const postCount: number = 100;

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
      let newVibe: Vibe = new Vibe(i, {id: 1, username: 'uname', password: 'pwrd', name: 'name'}, 'Message', []);
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
