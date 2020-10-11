import { Component, OnInit } from '@angular/core';
import { TopicosService } from 'src/app/services/topicos.service';

@Component({
  selector: 'event-binding',
  templateUrl: './app-exemplo3.component.html',
  styleUrls: ['./app-exemplo3.component.scss']
})
export class AppExemplo3Component implements OnInit {

  escola: string;
  topicos: string[];
  // Ele tem o papel de ser executado quando o componente é criado.
  // É uma função especial para ser processada quando o componenet é criado
  // e então a sua tarefa se torna receber objetos através de injeção de dependências
  constructor(service: TopicosService) {
    this.topicos = service.getTopicos();
  }

  // O ngOnInit é uma propriedade (função) da Interface OnInit que funciona/é ativada quando o componente é inicializado
  // Em Interfaces temos apenas DEFINIÇÕES - essas definições podem ser de variaveis/objetos/propriedades (funções)
  // Colocamos no ngOnInit TUDO que queremos que aconteça quando a tela for inicializada
  ngOnInit(): void {
    this.escola = 'Impacta';
  }

  alterarTexto(): void {
    this.escola = 'Impacta Tecnologia';
  }
}
