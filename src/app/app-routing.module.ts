import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path : 'ngr-welcome/:username', component: WelcomeComponent},
  { path : 'ngr-welcome', component: WelcomeComponent},
  { path : 'ngr-basic', component: BasicComponent},
  { path : 'ngr-user', component: UserComponent},
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: '**', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
