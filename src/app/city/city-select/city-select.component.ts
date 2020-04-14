import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html'
})
export class CitySelectComponent implements OnInit {
  @Output() emitChosenCity = new EventEmitter<number>();
  cities$: Observable<City[]>;
  cityId: number;

  constructor(
    private cityService: CityService) {}

  ngOnInit() {
    this.cities$ = this.cityService.getCityData('city.list.json').pipe(
      map(cities => Object.values(cities.slice(0, 10)))
    );
  }

  chooseCity(cityId: number) {
    this.emitChosenCity.emit(cityId);
  }
}
