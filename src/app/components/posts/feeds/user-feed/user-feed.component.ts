import {Component, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MatDialog} from "@angular/material/dialog";
import {VibeService} from "../../../../service/vibe.service";
import {NewVibeComponent} from "../../new-vibe/new-vibe.component";

const postCount: number = 100;

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor(public dialog: MatDialog, private vibeService: VibeService) { }

  ngOnInit(): void {
    this.vibeService.getVibesByCurrentUser().subscribe(
      (data) => {
        this.vibes = data
      }
    )
  }

  openNewVibeDialog() {
    const dialogRef = this.dialog.open(NewVibeComponent);
  }
}
