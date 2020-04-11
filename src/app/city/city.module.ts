import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CityService } from './services/city.service';
import { CitySelectComponent } from './city-select/city-select.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CitySelectComponent
  ],
  providers: [
    CityService
  ],
  exports: [
    CitySelectComponent
  ]
})
export class CityModule { }
