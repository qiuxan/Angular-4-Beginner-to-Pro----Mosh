import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {
    this.format = '';
  }

  @Input('format') format: string; // Explicitly define the type as 'string'
  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onBlur() {
    console.log('on blur');
    let value: string = this.el.nativeElement.value;
    if (this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
  }
}
