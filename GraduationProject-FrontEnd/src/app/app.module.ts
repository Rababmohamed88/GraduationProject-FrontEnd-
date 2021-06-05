import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { LatestOffersComponent } from './latest-offers/latest-offers.component';
import { FeaturedCarsComponent } from './featured-cars/featured-cars.component';
import { TotalCarsComponent } from './total-cars/total-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    SliderComponent,
    LatestOffersComponent,
    FeaturedCarsComponent,
    TotalCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

