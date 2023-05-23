import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayaComponent } from './components/playa/playa.component';
import { MontanaComponent } from './components/montana/montana.component';
import { CapitalComponent } from './components/capital/capital.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'playa', component: PlayaComponent },
  {path:'montana', component: MontanaComponent},
  {path:'capital',component:CapitalComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
