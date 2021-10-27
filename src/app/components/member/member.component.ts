import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/User';
import { SessionMember } from '../../models/SessionMember';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor() { }
  
 

  
  ngOnInit(): void {
    
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
