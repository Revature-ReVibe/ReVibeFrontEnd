import { NgModule } from "@angular/core";
import { GeneralFeedComponent } from "./components/posts/feeds/general-feed/general-feed.component";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { GeneralFormComponent } from "./general-form/general-form.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { EventsComponent } from "./components/events/events.component";
import { VibeSessionComponent } from "./components/vibe-session/vibe-session.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

const routes: Routes = [
    {path: "",component: HomeComponent},
    {path: "login",component: LoginComponent},
    {path:"profile",component: UserProfileComponent},
    {path: "feed",component: GeneralFeedComponent},
    {path: "registration",component: RegistrationComponent},
    {path: "form",component: GeneralFormComponent},
    {path: "events",component: EventsComponent},
    {path: "vibe-session",component: VibeSessionComponent},
    {path: "reset-password",component: ResetPasswordComponent}
];

@NgModule({imports:[RouterModule.forRoot(routes)], exports:[RouterModule]})
export class AppRoutingModule {

}
