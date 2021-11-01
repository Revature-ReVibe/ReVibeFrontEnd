import { Component, Input, OnInit } from '@angular/core';
import { Vibe } from '../../../models/Vibe';
import { Account } from '../../../models/Account';
import { LikeService } from 'src/app/service/like.service';
import { Like } from 'src/app/models/Like';

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.css']
})

export class VibeComponent implements OnInit {

  inputAccount: Account = new Account('ORLY', 'NOWAI');

  likesArray: Like[]= [];

  @Input() inputVibe!: Vibe;

  testVibe: Vibe = new Vibe(0, "Come at me bro!", this.likesArray.length, this.likesArray, 0, "date", [], 'https://mefunny-test-bucket.s3.amazonaws.com/1634357350701_comeatmebro.jfif')

  constructor(private likeService: LikeService) {
    this.inputVibe = this.testVibe;
    this.likeService.getLikes(this.inputVibe.vibeId)
      .subscribe((likes) => {
        this.likesArray = likes;
      });
   }

  ngOnInit(): void {
  }

  like() {
    this.likeService.postLike(this.inputVibe.vibeId);
  }

}
