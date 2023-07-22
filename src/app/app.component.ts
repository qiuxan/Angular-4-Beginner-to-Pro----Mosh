import { Component } from '@angular/core';
import { FaveriteEventData } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-app';
  post = {
    isFavorite: true,
  };
  onFavoriteChanged(isFaverite: FaveriteEventData) {
    console.log(
      'onFavoriteChanged function called',
      isFaverite,
      isFaverite.selected
    );
  }
}
