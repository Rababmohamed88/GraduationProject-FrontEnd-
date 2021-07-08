import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ChooseCarComponent } from './components/choose-car/choose-car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { SearchComponent } from './components/search/search.component';
import { RentComponent } from './components/rent/rent.component';
// import { RentMyCarComponent } from './components/rent-my-car/rent-my-car.component';

import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellMyCarComponent } from './components/sell-my-car/sell-my-car.component';
import { UsedCarsComponent } from './components/used-cars/used-cars.component';
import { ViewCarsComponent } from './components/view-cars/view-cars.component';
import { RentmycarComponent } from './components/rentmycar/rentmycar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'choose-car',
    component: ChooseCarComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'rent', component: RentComponent },
  {
    path: 'Basic-info',
    component: RentmycarComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'sell-my-car',
    component: SellMyCarComponent,
    canActivate: [AuthGuardGuard],
  },

  {
    path: 'view-cars',
    component: ViewCarsComponent,
    canActivate: [AuthGuardGuard],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardGuard],
  },

  { path: 'profile', component: ProfileComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'used-cars', component: UsedCarsComponent },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExploreModule),
  },
  { path: '', component: HomeComponent },
  {
    path: 'Suggestion',
    component: SuggestionComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
