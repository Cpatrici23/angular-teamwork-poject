import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayaComponent } from './playa/playa.component';
import { MontanaComponent } from './montana/montana.component';
import { CapitalComponent } from './capital/capital.component';



@NgModule({
  declarations: [
    HomeComponent,
    PlayaComponent,
    MontanaComponent,
    CapitalComponent
  ],
  imports: [
    CommonModule
  ],
  
})
export class ComponentsModule { }
