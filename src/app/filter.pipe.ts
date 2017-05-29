import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, state_id: number, propName: string): any {
    if (value.length === 0) {
    	return value;
    }
  	const resultArray = [];
    for(const item of value) {
    	if (item[propName] === +state_id) {
    		resultArray.push(item);
    	}
    }
    return resultArray;
  }

}
