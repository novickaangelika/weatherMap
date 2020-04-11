import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html'
})
export class CitySelectComponent implements OnInit {
  @Output() emitChosenCity = new EventEmitter<number>();
  cities$: Observable<City[]>;

  constructor(
    private cityService: CityService) {}

  ngOnInit() {
    // todo slice array
    this.cities$ = this.cityService.getCityData(`city.list.json`).pipe(
      map(cities => {
        cities.slice(1);
        return cities;
      })
    );
  }

  chooseCity(cityId: number) {
    this.emitChosenCity.emit(cityId);
  }
}
