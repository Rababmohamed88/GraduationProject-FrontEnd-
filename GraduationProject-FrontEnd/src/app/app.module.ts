import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
//import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';


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
import { RentComponent } from './components/rent/rent.component';
import { RentMyCarComponent } from './components/rent-my-car/rent-my-car.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatRippleModule } from '@angular/material/core';

// import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
//   MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
//   MatSlideToggleModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { ProfileComponent } from './components/profile/profile.component';

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
    RentComponent,
    RentMyCarComponent,
    SuggestionComponent,
    ProfileComponent
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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
  }
  ],
  

 
  bootstrap: [AppComponent],
})


export class AppModule {}
