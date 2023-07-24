import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  log(x: any) {
    console.log(x);
  }
  onSubmit(f: NgForm) {
    console.log(f); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}
