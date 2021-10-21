import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RevLoginComponent } from "./Modules/rev-login/rev-login.component";
import { ShowInfoComponent } from "./Modules/show-info/show-info.component";

const routes: Routes = [
    {path: 'login', component: RevLoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: ShowInfoComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  