import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/User';
import { SessionMember } from '../../models/SessionMember';

@Component({
  selector: 'app-vibe-session',
  templateUrl: './vibe-session.component.html',
  styleUrls: ['./vibe-session.component.css']
})
export class VibeSessionComponent implements OnInit {

  constructor() { }
  
  //dummy member data
  
  members: SessionMember[] = [
    new SessionMember("vibesession1", 1, 1, "member1"),
    new SessionMember("vibesession1", 1, 2, "member2"),
    new SessionMember("vibesession1", 1, 3, "member3"),
    new SessionMember("vibesession1", 1, 4, "member4"),

    new SessionMember("vibesession1", 2, 1, "member5"),
    new SessionMember("vibesession1", 2, 2, "member6")

  ];
  
  ngOnInit(): void {
    //this.members[1] = this.member1;
    //this.members[2] = this.member2;
    this.showAllByVibeId;
  }

  receiveMemberFromChild(receivedMember:SessionMember){
    //console.log(receivedMember);
    console.log(this.members);
  }
  
  showAllByVibeId()
  {

    //VibeSession Service function
    //return this.vibeService.showAllByVibeID().subscribe();
  }
}
