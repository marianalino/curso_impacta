import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicosService {

  constructor() { }

  getTopicos(): string[] {
    return [
      'Conceitos do Node.js',
      'MVC com Express.js',
      'Webservice - criação e consumo',
      'MongoDB',
      'AngularJS',
      'Angular'
    ];
  }
}
