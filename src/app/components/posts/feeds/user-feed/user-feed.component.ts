import {Component, OnInit} from '@angular/core';
import {Vibe} from "../../../../models/Vibe";

const postCount: number = 100;

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor() { }

  ngOnInit(): void {
    //Dummy data, should be replaced with fetching data from server (get posts associated with user)
    for(let i = 0; i < postCount; i++) {
      let newVibe: Vibe = new Vibe(i, "Message", 0, [], 1, "date", []);
      this.vibes.push(newVibe);
    }
  }
}
