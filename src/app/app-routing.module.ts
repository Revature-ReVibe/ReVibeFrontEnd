import {NgModule} from "@angular/core";
import {GeneralFeedComponent} from "./components/posts/feeds/general-feed/general-feed.component";
import {RouterModule, Routes} from "@angular/router";
//import { AccountComponent } from "./account/account.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {GeneralFormComponent} from "./general-form/general-form.component";

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "login",
      component: LoginComponent
    },

  {
    path: "feed",
    component: GeneralFeedComponent
  },
  {
      path: "registration",
      component: RegistrationComponent
    },
    {
      path: "form",
      component: GeneralFormComponent
    }
];

@NgModule({imports:[RouterModule.forRoot(routes)], exports:[RouterModule]})
export class AppRoutingModule {

}
