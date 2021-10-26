import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-vibe',
  templateUrl: './new-vibe.component.html',
  styleUrls: ['./new-vibe.component.css']
})
export class NewVibeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewVibeComponent>) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('50%', 'auto');
  }

  submitVibe() {

  }

}
