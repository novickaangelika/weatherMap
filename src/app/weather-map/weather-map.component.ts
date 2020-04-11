import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WeatherService } from './services/weather.service';
import { WeatherUI } from './models/weatherUI.model';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {
  weatherUI$: Observable<WeatherUI>;

  constructor(
  private weatherService: WeatherService) {}

  ngOnInit() {
    // test for Katowice
    this.weatherUI$ = this.weatherService.getCurrentWeatherDataInCity(3096472).pipe(
      map(weatherMap => this.weatherService.createWeatherUIData(weatherMap))
    );
  }

  changeCity(cityId: number) {
    console.log('cityId', cityId);

    this.weatherService.getCurrentWeatherDataInCity(cityId).pipe(
      map(weatherMap => this.weatherService.createWeatherUIData(weatherMap))
    );
  }
}
