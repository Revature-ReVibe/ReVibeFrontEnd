import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Vibe} from "../../../models/Vibe";
import {VibeService} from "../../../service/vibe.service";

@Component({
  selector: 'app-new-vibe',
  templateUrl: './new-vibe.component.html',
  styleUrls: ['./new-vibe.component.css']
})
export class NewVibeComponent implements OnInit {

  takeImage: boolean = false;

  message:string = '';
  image:string = '';

  constructor(public dialogRef: MatDialogRef<NewVibeComponent>, private vibeService: VibeService) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('50%', 'auto');
  }

  submitVibe() {
    let vibe: Vibe = new Vibe(0, this.message, 0, [], 0, '', [], this.image);
    this.vibeService.createNewVibe(vibe).subscribe();
  }

  toggleImageField() {
    this.takeImage = !this.takeImage;
  }

}
