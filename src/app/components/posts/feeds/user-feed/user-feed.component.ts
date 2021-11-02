import {Component, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MatDialog} from "@angular/material/dialog";
import {VibeService} from "../../../../service/vibe.service";
import {NewVibeComponent} from "../../new-vibe/new-vibe.component";

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor(public dialog: MatDialog, private vibeService: VibeService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  openNewVibeDialog() {
    const dialogRef = this.dialog.open(NewVibeComponent);

    dialogRef.afterClosed().subscribe(
      () => {
        this.refreshData();
      }
    )
  }

  refreshData() {
    this.vibeService.getVibesByCurrentUser().subscribe(
      (data) => {
        this.vibes = data
      }
    );
  }
}
