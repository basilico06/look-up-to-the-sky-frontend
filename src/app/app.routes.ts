import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {InfoEventComponent} from './info-event/info-event.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component :LoginComponent},
    { path:  "event/:IDevent", component : InfoEventComponent},
];
