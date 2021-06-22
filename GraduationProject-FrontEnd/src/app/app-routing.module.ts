import { ChooseCarComponent } from './components/choose-car/choose-car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'choose-car', component: ChooseCarComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'car-details/:id', component: CarDetailsComponent },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExploreModule),
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
