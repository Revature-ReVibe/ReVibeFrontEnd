import {Component, OnInit} from '@angular/core';
import {LogoutService} from 'src/app/service/logoutService/logout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private logout:LogoutService) { }

  ngOnInit(): void {
  }

  signout(event:Event){
    event.preventDefault();
    this.logout.signout();
  }

}
