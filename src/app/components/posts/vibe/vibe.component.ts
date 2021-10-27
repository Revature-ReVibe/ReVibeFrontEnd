import { Component, Input, OnInit } from '@angular/core';
import { Vibe } from '../../../models/Vibe';
import { Account } from '../../../models/Account';
@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.css']
})
export class VibeComponent implements OnInit { 

  inputAccount: Account = new Account('ORLY', 'NOWAI');
  fillerAccount: Account = new Account('YARLY', 'SRSLY');

  inputAccountArray: Account[] = [
    this.inputAccount,
    this.fillerAccount
  ]

  @Input() inputVibe: Vibe = new Vibe(0,this.inputAccount,"O RLY?",this.inputAccountArray,
  'https://mefunny-test-bucket.s3.amazonaws.com/1634357235922_orly.jpg', undefined);

  testVibe: Vibe = new Vibe(0,this.inputAccount,"Come at me bro!",this.inputAccountArray,
  'https://mefunny-test-bucket.s3.amazonaws.com/1634357350701_comeatmebro.jfif', undefined);

  constructor() { }

  ngOnInit(): void {
  }

}
