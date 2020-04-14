import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { WeatherService } from './services/weather.service';
import { WeatherMapComponent } from './weather-map.component';
import { CityModule } from '../city/city.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CityModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBulBXLLGlr9XgE75JWbJdZDXHpf-mDFZ4'
    })
  ],
  declarations: [
    WeatherMapComponent
  ],
  providers: [
    WeatherService
  ],
  exports: [
    WeatherMapComponent
  ]
})
export class WeatherMapModule { }
