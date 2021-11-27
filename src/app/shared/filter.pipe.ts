import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: any[], filterString: string, propertyName: string): any[] {
    
    const result: any = [];

    if (!value || filterString === '' || propertyName === '') {
      return value;
    }

    value.forEach((i: any) => {
      if (i[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(i);
      }
    });

    return result;
    // return null;
  }

}
