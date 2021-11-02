import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string="";
  password:string="";

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("ReVibeSocialMediaApp-LocalStorageLocation") == null)
    {
      this.router.navigateByUrl('login')
    }
  }

}
