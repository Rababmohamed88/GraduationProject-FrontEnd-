import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { NewcarComponent } from './newcar/newcar.component';
import { ExploreLayoutComponent } from './explore-layout/explore-layout.component';
import { UsedcarComponent } from './usedcar/usedcar.component';
import { AllcarComponent } from './allcar/allcar.component';


@NgModule({
  declarations: [
    NewcarComponent,
    ExploreLayoutComponent,
    UsedcarComponent,
    AllcarComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
