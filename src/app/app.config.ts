import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 👈 IMPORTA QUESTO
import { CommonModule } from '@angular/common'; // 👈 IMPORTA QUESTO

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient() // Aggiungi CommonModule per permettere ngIf, ngFor
  ]
};
