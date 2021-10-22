import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AccountComponent } from "./account/account.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
    {
      path: "", 
      component: HomeComponent
    },

    {
      path: "account",
      component: AccountComponent
    },
    {
      path: "login", 
      component: LoginComponent
    },

    {
      path: "registration",
      component: RegistrationComponent
    }
];

@NgModule({imports:[RouterModule.forRoot(routes)], exports:[RouterModule]})
export class AppRoutingModule {

}
