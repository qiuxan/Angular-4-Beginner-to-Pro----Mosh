import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->
    <!-- <button [style.background]="isActive ? 'blue' : 'white'">Save</button> -->

    <div (click)="onClickDiv()">
      <button (click)="onSave($event)">Save</button>
    </div>
  `,
})
export class CoursesComponent {
  isActive = true;
  title = 'List of courses';
  courses;
  onClickDiv() {
    console.log('div clicked');
  }
  onSave($event: MouseEvent) {
    $event.stopPropagation();
    console.log('save', $event);
  }
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
