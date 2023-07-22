import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  inputs: ['isFavorite'],
})
export class StarComponent {
  isFavorite: boolean = true;
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
