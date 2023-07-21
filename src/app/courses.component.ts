import { Component, NgModule } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    {{ course.title | uppercase }}<br />
    {{ course.rating | number : '2.2-2' }}<br />
    {{ course.student | number : '1.2-2' }}<br />
    {{ course.price | currency : 'AUD' : false : '2.2-2' }}<br />
    {{ course.releaseDate | date : 'shortDate' }}
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->
    <!-- <button [style.background]="isActive ? 'blue' : 'white'">Save</button> -->

    <!-- <div (click)="onClickDiv()">
      <button (click)="onSave($event)">Save</button>
    </div> -->
    <!-- <input type="text" (keyup.enter)="onKeyUp($event)" /> -->
    <!-- <input
      [value]="email"
      type="text"
      (keyup.enter)="email = checkEvent($event); onKeyUp()"
    /> -->

    <!-- <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()" /> -->
  `,
})
export class CoursesComponent {
  // email = 'iqiu@rm.com';
  course = {
    title: 'the complete angular course',
    rating: 4.9073,
    student: 30123,
    price: 190.29,
    releaseDate: new Date(2016, 3, 1),
  };

  checkEvent($event: Event) {
    return ($event.target as HTMLInputElement).value;
    // console.log(($event.target as HTMLInputElement).value);
  }

  // onKeyUp($event: Event) {
  //   console.log('Enter', ($event.target as HTMLInputElement).value);
  // }

  // onKeyUp() {
  //   console.log(this.email);
  // }
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
