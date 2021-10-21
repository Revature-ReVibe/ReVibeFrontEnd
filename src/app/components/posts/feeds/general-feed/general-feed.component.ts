import { Component, OnInit } from '@angular/core';
import { Vibe } from "../../../../models/Vibe";
import { Account } from "../../../../models/Account";

  const postCount: number = 100;

@Component({
  selector: 'app-general-feed',
  templateUrl: './general-feed.component.html',
  styleUrls: ['./general-feed.component.css']
})
export class GeneralFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor() {
    for(let i = 0; i < postCount; i++) {
      let newVibe: Vibe = new Vibe(i, new Account('uname', 'pwrd'), 'Message', []);
      this.vibes.push(newVibe);
    }
  }

  ngOnInit(): void {
  }

}
