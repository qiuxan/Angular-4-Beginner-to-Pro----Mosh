import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input('is-Favorite') isFavorite: boolean = true;
  @Output() change = new EventEmitter();
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
