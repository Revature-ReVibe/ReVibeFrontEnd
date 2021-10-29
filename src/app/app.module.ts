import { JWT_Interceptor } from './interceptors/jwt-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// this is the only material-related import here.
// for mat-specific ones, go to material.module!
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VibeComponent } from './components/posts/vibe/vibe.component';
import { GeneralFeedComponent } from './components/posts/feeds/general-feed/general-feed.component';
import { UserFeedComponent } from './components/posts/feeds/user-feed/user-feed.component';
import { FeedComponent } from './components/posts/feeds/feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogoutService } from './service/logoutService/logout.service';

import { GeneralFormComponent } from './general-form/general-form.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EventsComponent } from './components/events/events.component';
import { VibeSessionComponent } from './components/vibe-session/vibe-session.component';
import { MemberComponent } from './components/member/member.component';
import { LoginService } from './service/loginService/login.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from "@angular/material/tooltip";
import { NewVibeComponent } from './components/posts/new-vibe/new-vibe.component';
import { ReplyFeedComponent } from './components/posts/feeds/reply-feed/reply-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VibeComponent,
    GeneralFeedComponent,
    UserFeedComponent,
    FeedComponent,
    NewVibeComponent,
    ResetPasswordComponent,
    LoginComponent,
    RegistrationComponent,
    GeneralFormComponent,
    UserProfileComponent,
    SidebarComponent,
    EventsComponent,
    VibeSessionComponent,
    MemberComponent,
    ReplyFeedComponent

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
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [HttpClient ,LoginService, LogoutService, { provide: HTTP_INTERCEPTORS, useClass: JWT_Interceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
