import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './app-exemplo2.component.html',
  styleUrls: ['./app-exemplo2.component.scss']
})
export class AppExemplo2Component {
  // Exemplo de Property Binding
  // É um tipo de Binding Unidirecional (component -> view)

  rnd: number = Math.random();
  imagem = 'http://lorempixel.com/400/200/animals';
}
