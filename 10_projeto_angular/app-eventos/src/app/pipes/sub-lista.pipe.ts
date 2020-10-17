import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
  name: 'subLista'
})
export class SubListaPipe implements PipeTransform {

  transform(eventos: Evento[], input: string): Evento[] {
    if (input) {
      // return eventos.filter(evento => evento.descricao.includes(input));
      var f = eventos.filter(n => n.descricao.toLowerCase().includes(input.toLowerCase()));
      return f;
    } else {
      return eventos;
    }
  }

}
