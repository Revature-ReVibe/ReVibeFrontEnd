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
  member1 = new SessionMember("vibesession1", 1, 1, "member1")
  member2 = new SessionMember("vibesession1", 2, 2, "member2")

  //vibe sesh members to be displayed
  members : SessionMember[];

  
  ngOnInit(): void {
    this.members[0] = this.member1;
    this.members[1] = this.member2;
    this.showAllByVibeId;
  }
  @Input()
  member:SessionMember;

  @Output()
  updateMemberEvent = new EventEmitter<SessionMember>();

  updatedMember:SessionMember = new SessionMember("emitvibesession1", 2, 5, "emitmember2")

  updateMemberState(){
    this.updateMemberEvent.emit(this.updatedMember);
  }

  showAllByVibeId()
  {

    //VibeSession Service function
    //return this.vibeService.showAllByVibeID().subscribe();
  }
}
