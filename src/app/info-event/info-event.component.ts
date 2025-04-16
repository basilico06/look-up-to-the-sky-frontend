import { Component } from '@angular/core';
import {LocalStorageApiService} from '../../service/localStorageApi/local-storage-api.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-info-event',
  imports: [CommonModule],
  templateUrl: './info-event.component.html',
  styleUrl: './info-event.component.css'
})
export class InfoEventComponent {

    constructor(private localStorageApiService: LocalStorageApiService, private route: ActivatedRoute) {
        // Constructor logic can go here if needed
    }

    evento: any = {};

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('IDevent'); // '123'
        console.log('Event ID:', id?.slice(1));
        // @ts-ignore
        this.evento=this.localStorageApiService.getItem(id.slice(1));

        if (this.evento && this.evento.date) {
            this.evento.dateObject = new Date(this.evento.date);
        }
    }


}
