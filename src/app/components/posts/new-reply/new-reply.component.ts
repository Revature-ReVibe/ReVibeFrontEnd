import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Vibe} from "../../../models/Vibe";

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.css']
})
export class NewReplyComponent implements OnInit {

  parentVibe!:Vibe;

  takeImage: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewReplyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.parentVibe = data.parent;
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('50%', 'auto');
  }

  submitVibe() {

  }

  toggleImageField() {
    this.takeImage = !this.takeImage;
  }

}
