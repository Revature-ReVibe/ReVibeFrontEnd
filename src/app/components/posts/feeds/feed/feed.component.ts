import { Component, Input, OnInit } from '@angular/core';
import { Vibe } from "../../../../models/Vibe";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input()
  posts!: Vibe[];

  constructor() { }

  ngOnInit(): void {
  }

}
