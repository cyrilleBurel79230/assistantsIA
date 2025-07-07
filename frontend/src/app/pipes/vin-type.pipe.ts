import { Pipe, PipeTransform } from '@angular/core';
import { Vin } from '../models/vin.model';

@Pipe({
  name: 'vinType',
  standalone: true
})
export class VinTypePipe implements PipeTransform {
  transform(cave: Vin[], type: string): Vin[] {
    if (!type) return cave;
    return cave.filter(vin => vin.type === type);
  }
}