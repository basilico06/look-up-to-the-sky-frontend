import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

    constructor(private router: Router) {
        // Constructor logic can go here if needed
    }

    onClick() {
        this.router.navigate(['/', 'event',"/" + `event|${this.events.ID}_${this.events.date}`]);
    }

    @Input() events: any = {};

    ngOnInit() {
        if (this.events && this.events.date) {
            this.events.dateObject = new Date(this.events.date);
        }
    }


}
