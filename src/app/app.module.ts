import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { AccountComponent } from './components/account/account.component';
import { FormComponent } from './components/form/form.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountService } from './service/account.service';
import { LogoutService } from './service/logoutService/logout.service';
import { LoginService } from './service/loginService/login.service';
import { VibeComponent } from './vibe/vibe.component';

@NgModule({
  declarations: [
    AppComponent,
    //AccountComponent,
    FormComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    VibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [LoginService, LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
