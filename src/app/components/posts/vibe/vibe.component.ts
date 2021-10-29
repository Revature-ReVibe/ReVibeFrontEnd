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

  @Input() inputVibe: Vibe = new Vibe(0,this.inputAccount,"O RLY?",this.likesArray,
  'https://mefunny-test-bucket.s3.amazonaws.com/1634357235922_orly.jpg', undefined);

  testVibe: Vibe = new Vibe(0,this.inputAccount,"Come at me bro!",this.likesArray,
  'https://mefunny-test-bucket.s3.amazonaws.com/1634357350701_comeatmebro.jfif', undefined);

  constructor(private likeService: LikeService) {
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
