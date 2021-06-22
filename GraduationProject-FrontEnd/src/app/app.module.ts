import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ChooseCarComponent } from './components/choose-car/choose-car.component';
import {DropdownModule} from 'primeng/dropdown';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarDetailsComponent,
    SearchComponent,
    GalleryComponent,
    ChooseCarComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ButtonModule,
    GalleriaModule,
    DropdownModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
