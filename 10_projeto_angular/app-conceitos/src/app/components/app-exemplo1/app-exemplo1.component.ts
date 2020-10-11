import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './app-exemplo1.component.html',
  styleUrls: ['./app-exemplo1.component.scss']
})
export class AppExemplo1Component {
  titulo: string = 'Primeiro componente do Angular';

  exibe: boolean = true;

  topicosDasAulas: string[] = [
    'Conceitos do Node.js',
    'MVC com Express.js',
    'Webservice - criação e consumo',
    'MongoDB',
    'AngularJS',
    'Angular'
  ];
}
