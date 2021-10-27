import { Component, OnInit } from '@angular/core';
import { Vibe } from "../../../../models/Vibe";
import { Account } from "../../../../models/Account";

const postCount: number = 100;

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  vibes: Vibe[] = [];

  constructor() { 
  //Dummy data, should be replaced with fetching data from server (get all posts)
  for(let i = 0; i < postCount; i++) {
    let newVibe: Vibe = new Vibe(i, new Account('uname', 'pwrd'), 'Message', []);
    this.vibes.push(newVibe);
  }
}

ngOnInit(): void {
}

}
