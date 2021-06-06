import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { LatestOffersComponent } from './latest-offers/latest-offers.component';
import { FeaturedCarsComponent } from './featured-cars/featured-cars.component';
import { TotalCarsComponent } from './total-cars/total-cars.component';
import{FooterComponent} from './components/footer/footer.component'
import {NavbarComponent} from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    SliderComponent,
    LatestOffersComponent,
    FeaturedCarsComponent,
    TotalCarsComponent,
    NavbarComponent,
    FooterComponent
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

