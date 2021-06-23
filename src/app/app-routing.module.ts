import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { BattleComponent } from './battle/battle.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'*',component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'registar',component:RegistarComponent},
  {path:'battle',component:BattleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
