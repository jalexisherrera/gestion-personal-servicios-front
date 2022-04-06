import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultProductos = [];
    for (const producto of value) {
      if (producto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProductos.push(producto);
      };
    };
    return resultProductos;
  }


}

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(array: Array<any>, args: string): Array<any> {
        return array.sort((a: any, b: any) => {
            if (a[args] < b[args]) {
                return -1;
            } else if (a[args] > b[args]) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}
