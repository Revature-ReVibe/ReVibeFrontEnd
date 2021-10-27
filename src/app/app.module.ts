import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

// this is the only material-related import here.
// for mat-specific ones, go to material.module!
import {MaterialModule} from './material/material.module';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './components/registration/registration.component';

import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {VibeComponent} from './components/posts/vibe/vibe.component';
import {GeneralFeedComponent} from './components/posts/feeds/general-feed/general-feed.component';
import {UserFeedComponent} from './components/posts/feeds/user-feed/user-feed.component';
import {FeedComponent} from './components/posts/feeds/feed/feed.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {NewVibeComponent} from './components/posts/new-vibe/new-vibe.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {LoginComponent} from './components/login/login.component';

import { HttpClient} from '@angular/common/http';


//import { AccountComponent } from './components/account/account.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import {LogoutService} from './service/logoutService/logout.service';
import {LoginService} from './service/login.service';

import { AccountService } from './service/account.service';

import { GeneralFormComponent } from './general-form/general-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EventsComponent } from './components/events/events.component';
import { VibeSessionComponent } from './components/vibe-session/vibe-session.component';
import { MemberComponent } from './components/member/member.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    //AccountComponent,
    NavBarComponent,
    HomeComponent,
    VibeComponent,
    GeneralFeedComponent,
    UserFeedComponent,
    FeedComponent,
    NewVibeComponent,
    FeedComponent,
    LoginComponent,
    RegistrationComponent,
    GeneralFormComponent,
    VibeComponent,
    UserProfileComponent,
    SidebarComponent,
    EventsComponent,
    VibeSessionComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MaterialModule,
    MatTooltipModule
  ],
  providers: [LoginService, LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
