import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherMap } from '../models/weather.model';
import { WeatherUI } from '../models/weatherUI.model';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) { }

    getCurrentWeatherDataInCity(cityId: number): Observable<WeatherMap> {
        // tslint:disable-next-line: max-line-length
        return (this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=d63c3be7b872f76423884ff2937ef8d7`) as Observable<WeatherMap>);
    }

    createWeatherUIData(data: WeatherMap): WeatherUI {
        return {
            city_name: data.name,
            weather_main: data.weather && data.weather.length > 0 && data.weather[0].main  ? data.weather[0].main : '',
            weather_desc: data.weather && data.weather.length > 0 && data.weather[0].description  ? data.weather[0].description : '',
            temp: data.main.temp ? this.convertKelvinToCelsius(data.main.temp) : '',
            pressure: data.main.pressure ? `${data.main.pressure} hPa` : '',
            humidity: data.main.humidity ? `${data.main.humidity} %` : '',
            wind_speed: data.wind.speed ? `${data.wind.speed} m/s` : '',
            temp_min_max:
                data.main.temp_max && data.main.temp_min ?
                `${this.convertKelvinToCelsius(data.main.temp_min)} - ${this.convertKelvinToCelsius(data.main.temp_max)}` :
                '',
            wind_deg: data.wind.deg ? data.wind.deg.toString() : '',
            clouds: data.clouds.all ? `${data.clouds.all} %` : '',
            sunrise: data.sys.sunrise ? this.getTime(data.sys.sunrise) : '',
            sunset: data.sys.sunset ? this.getTime(data.sys.sunset) : '',
            icon: data.weather && data.weather.length > 0 && data.weather[0].icon ? data.weather[0].icon.toString() : '',
            lat: data.coord ? data.coord.lat : null,
            lon: data.coord ? data.coord.lon : null
        };
    }

    private convertKelvinToCelsius(temp: number) {
        return Math.round(temp - 273.15).toString();
    }

    private getTime(date: number) {
        const newDate = new Date(date);
        return `${newDate.getHours()}:${newDate.getMinutes()}`;
    }
}
