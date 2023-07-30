import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  archiveItems = [
    { year: 2017, month: 3 },
    { year: 2017, month: 4 },
    { year: 2017, month: 5 },
  ];
}
