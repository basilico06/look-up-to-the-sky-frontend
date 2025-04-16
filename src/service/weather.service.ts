import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { GeolocationService } from './location/geolocalizzation.service'; // Adjust the import path as necessary

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiKey = '221098ea3cbc4d4f893143246250504'; // 🔑 Replace with your actual key
    private apiUrl = 'http://api.weatherapi.com/v1/current.json';

    constructor(
        private http: HttpClient,
        private locationService: GeolocationService
    ) {}

    getLocalWeather(): Observable<any> {
        // Convert the async location fetching into an observable using 'from'
        return from(this.locationService.getCurrentLocation()).pipe(
            switchMap(position => {
                const lat = position.latitude;
                const lon = position.longitude;
                const url = `${this.apiUrl}?key=${this.apiKey}&q=${lat},${lon}`;
                return this.http.get(url); // Return the HTTP observable for weather data
            }),
            catchError(error => {
                console.error('Error getting location or weather:', error);
                throw error;  // Propagate the error to the caller
            })
        );
    }
}
