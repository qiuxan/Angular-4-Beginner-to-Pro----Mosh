import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  //https://angular.io/api/core/PipeTransform

  transform(value: string, limit?: number) {
    if (!value) return null;
    let actulLimit = limit ? limit : 50;
    return value.substring(0, actulLimit) + '...';
  }
}
