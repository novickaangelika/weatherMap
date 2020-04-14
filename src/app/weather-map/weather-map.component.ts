import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, mergeMap } from 'rxjs/operators';

import { WeatherService } from './services/weather.service';
import { WeatherUI } from './models/weatherUI.model';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {
  weatherUI$: Observable<WeatherUI>;
  zoom = 15;

  constructor(
  private weatherService: WeatherService) {}

  ngOnInit() {
    // test for Katowice
    this.changeCity(3096472);
  }

  changeCity(cityId: number) {
    this.weatherUI$ = this.weatherService.getCurrentWeatherDataInCity(cityId).pipe(
      map(weatherMap => this.weatherService.createWeatherUIData(weatherMap))
    );
  }
}
