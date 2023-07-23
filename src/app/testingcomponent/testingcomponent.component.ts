import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testingcomponent',
  templateUrl: './testingcomponent.component.html',
  styleUrls: ['./testingcomponent.component.css'],

  // encapsulation: ViewEncapsulation.Emulated, //default taking global css rules, the css in this component stays in this component
  // encapsulation: ViewEncapsulation.ShadowDom, //WILL NOT taking global css rules, the css in this component stays in this component
  // encapsulation: ViewEncapsulation.None, //Taking global css rules, the css in this component will also become global rules
})
export class TestingcomponentComponent {}
