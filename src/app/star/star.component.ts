import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface FaveriteEventData {
  selected: boolean;
}
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input('is-Favorite') isSelected: boolean = true;
  @Output() change = new EventEmitter();
  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ selected: this.isSelected });
  }
}
