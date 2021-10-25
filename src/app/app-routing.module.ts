import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { HomeComponent } from "./home/home.component";
import { GeneralFeedComponent } from "./components/posts/feeds/general-feed/general-feed.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },

    {
        path: "account",
        component: AccountComponent,
    },

    {
        path: "feed",
        component: GeneralFeedComponent
    }
];

@NgModule({imports:[RouterModule.forRoot(routes)], exports:[RouterModule]})
export class AppRoutingModule {

}
