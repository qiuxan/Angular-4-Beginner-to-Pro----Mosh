import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `,
})
export class CoursesComponent {
  isActive = true;
  title = 'List of courses';
  courses;
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
