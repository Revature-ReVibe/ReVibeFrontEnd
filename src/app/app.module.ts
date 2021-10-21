import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RevLoginComponent } from './Modules/rev-login/rev-login.component';
import { JwtInterceptor } from './_Helpers/jwt.interceptor';
import { ShowInfoComponent } from './Modules/show-info/show-info.component';
import { AuthComponent } from './Modules/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RevLoginComponent,
    ShowInfoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  bootstrap: [AppComponent]
})
export class AppModule { }
