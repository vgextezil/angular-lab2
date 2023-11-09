import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: 'home' ,component:HomeComponent},
  {path: 'users', component:UsersComponent },
  {path: 'user/:id', component:UserComponent},
  {path: '404', component:NotfoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
