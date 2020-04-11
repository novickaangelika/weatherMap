import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';

@Injectable()
export class CityService {
    constructor(private http: HttpClient) { }

    getCityData(fileName: string): Observable<City[]> {
        return (this.http.get(`../assets/data/${fileName}`) as Observable<City[]>);
    }
}
