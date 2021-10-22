import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './components/app.component';
import { AccountComponent } from './account/account.component';
import { FormComponent } from './components/form/form.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountService } from './service/account.service';
import { LogoutService } from './service/logoutService/logout.service';
import { LoginService } from './service/loginService/login.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FormComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [LoginService, LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
