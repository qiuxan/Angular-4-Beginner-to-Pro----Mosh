import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent {
  onSubmit(f: NgForm) {
    console.log(f);
  }
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
}
