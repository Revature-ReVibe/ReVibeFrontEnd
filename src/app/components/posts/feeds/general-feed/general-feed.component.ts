import {Component, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";
import {MatDialog} from "@angular/material/dialog";
import {NewVibeComponent} from "../../new-vibe/new-vibe.component";
import {VibeService} from "../../../../service/vibe.service";


@Component({
  selector: 'app-general-feed',
  templateUrl: './general-feed.component.html',
  styleUrls: ['./general-feed.component.css']
})
export class GeneralFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor(public dialog: MatDialog, private vibeService: VibeService) {  }

  ngOnInit(): void {
    this.refreshData();
  }

  openNewVibeDialog() {
    const dialogRef = this.dialog.open(NewVibeComponent, {
      backdropClass: 'backdropBackground',
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(
      () => {
        this.refreshData();
      }
    )
  }

  refreshData() {
    this.vibeService.getAllVibes().subscribe(
      (data) => {
        this.vibes = data;
      }
    )
  }

}
