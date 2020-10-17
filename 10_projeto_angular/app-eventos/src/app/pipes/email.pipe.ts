import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, dominio: string, extensao: string): string {
    if (dominio === undefined) {
      dominio = 'teste';
    }
    if (extensao === undefined) {
      extensao = '.org';
    }
    return value + '@' + dominio + extensao;
  }

}
