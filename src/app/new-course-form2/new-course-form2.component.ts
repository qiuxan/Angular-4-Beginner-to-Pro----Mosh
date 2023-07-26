import { Component } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css'],
})
export class NewCourseForm2Component {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([]),
  });
  form2;
  constructor(fb: FormBuilder) {
    this.form2 = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }
}
