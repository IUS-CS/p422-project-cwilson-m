import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoComponent } from './auto/auto.component';
import { BoatComponent } from './boat/boat.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'auto', component: AutoComponent },
  { path: 'boat', component: BoatComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent } ,
  { path: '', component: InfoComponent },
  { path: '**', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
