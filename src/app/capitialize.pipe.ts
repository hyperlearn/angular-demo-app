import { PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'capitalize' })
export class Capitalize implements PipeTransform{
    transform(str: string) {
      if (str.length > 0) {
        return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
      }
      return "";
    }
}