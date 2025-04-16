import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, from, tap, throwError} from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { GeolocationService } from '../location/geolocalizzation.service';
import {LocalStorageApiService } from '../localStorageApi/local-storage-api.service';


@Injectable({
  providedIn: 'root'
})
export class EventsApiService {



    constructor(
        private http: HttpClient,
        private locationService: GeolocationService,
        private localStorageApiService: LocalStorageApiService
    ) {}

    generateEventId(ID:string,Date:string): string {

        return `event|${ID}_${Date}`;

    }


    getListEvents(): Observable<any[]> {
        return from(this.locationService.getCurrentLocation()).pipe(
            switchMap(position => {
                const lat = position.latitude;
                const lon = position.longitude;
                const url = `http://localhost:4000/route/event/${lat}/${lon}/100`;
                return this.http.get<any[]>(url); // HttpClient returns Observable, not Promise
            }),
            tap((events: any[]) => {

                this.localStorageApiService.clear();
                events.forEach(event => {
                    const eventId = this.generateEventId(event.ID, event.date);
                    this.localStorageApiService.setItem(eventId, event);
                });
            }),
            catchError(error => {
                console.error('Error getting location or events:', error);
                return throwError(() => error); // Return an observable that emits the error
            })
        );
    }

}
