import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './components/app.component';
import { AccountComponent } from './account/account.component';
import { FormComponent } from './components/form/form.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VibeComponent } from './components/posts/vibe/vibe.component';
import { GeneralFeedComponent } from './components/posts/feeds/general-feed/general-feed.component';
import { UserFeedComponent } from './components/posts/feeds/user-feed/user-feed.component';
import { FeedComponent } from './components/posts/feeds/feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FormComponent,
    NavBarComponent,
    HomeComponent,
    VibeComponent,
    GeneralFeedComponent,
    UserFeedComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
