import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Vibe} from "../../../models/Vibe";
import {VibeService} from "../../../service/vibe.service";

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.css']
})
export class NewReplyComponent implements OnInit {

  parentVibe!:Vibe;

  message:string = '';
  image:string = '';

  takeImage: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewReplyComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private vibeService: VibeService) {
    this.parentVibe = data.parent;
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('50%', 'auto');
  }

  submitVibe() {
    let vibe: Vibe = new Vibe(0, this.message, 0, [], 0, '', [], this.image, this.parentVibe.vibeId);
    this.vibeService.createNewReply(vibe, this.parentVibe.vibeId);
  }

  toggleImageField() {
    this.takeImage = !this.takeImage;
  }

}
