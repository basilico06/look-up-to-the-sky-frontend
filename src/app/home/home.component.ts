import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {map, Observable} from 'rxjs';
import {CardComponent} from '../card/card.component';
import { EventsApiService } from '../../service/eventsApi/events-api.service'
import { AuthService} from '../../service/AUTH/auth.service';


@Component({
    selector: 'app-home',
    imports: [
        AsyncPipe, CommonModule, CardComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
	x = "User" ;
    weatherData: any;

    weather$!: Observable<any>;
    eventList$!: Observable<any>;

    constructor(private weatherService: WeatherService, private EventListApi : EventsApiService, private auth: AuthService ) {}

    ngOnInit(): void {
        if (!this.auth.isLoggedIn()) {

        }
        this.weather$ = this.weatherService.getLocalWeather()
        this.eventList$ = this.EventListApi.getListEvents();
        this.eventList$ = this.eventList$.pipe(
            map((events: any[]) => events.sort((a, b) => a.date - b.date)) // Ascending
        );
    }


}
