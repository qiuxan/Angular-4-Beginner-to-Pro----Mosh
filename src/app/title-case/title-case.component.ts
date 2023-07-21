import { Component } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css'],
})
export class TitleCaseComponent {
  message = '';
  onChange($event: Event) {
    this.message = ($event.target as HTMLInputElement).value;
  }
}
