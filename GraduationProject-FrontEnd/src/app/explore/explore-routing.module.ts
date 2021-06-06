import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcarComponent } from './allcar/allcar.component';
import { ExploreLayoutComponent } from './explore-layout/explore-layout.component';
import { NewcarComponent } from './newcar/newcar.component';
import { UsedcarComponent } from './usedcar/usedcar.component';

const routes: Routes = [
  {path:'',
  component:ExploreLayoutComponent,
  children:[
    {path:'new',component:NewcarComponent},
    {path:'used',component:UsedcarComponent},
    {path:'all',component:AllcarComponent}

]

},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
