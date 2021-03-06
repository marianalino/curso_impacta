import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { WebserviceService } from 'src/app/services/webservice.service';
import { environment } from '../../../environments/environment';
import { Evento } from './../../interfaces/evento';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {
  eventos: Evento[];
  showDelete = environment.featureFlag.showDelete;

  constructor(
    private webservice: WebserviceService,
    private log: LogService
  ) { }

  ngOnInit(): void {
    // Acessamos nosso service com o this.webservice e chamamos a função .getEventos()
    // Como a função é do tipo Observable, para que aguardemos o retorno do Observable, inscrevemos a função para capturar o retorno
    // Usamos o subscribe para capturar esse retorno, que é nossa resposta
    // Usamos dentro do subscribe uma arrow function aonde atribuimos resposta a nossa variavel criada anteriormente
    // this.eventos = resposta
    this.webservice.getEventos().subscribe(resposta => {
      this.eventos = resposta;
      this.log.show('info', resposta, this.eventos);
      // this.log.show('error', resposta, this.eventos);
      this.log.show('warning', resposta, this.eventos);
      this.log.show('log', "Meu log", resposta);
    });
  }

}
/*
export class ListaEventoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3200/";
  eventos: Evento[];

  ngOnInit(): void {
    this.http.get<Evento[]>(this.url + "eventos").subscribe(
      resposta => this.eventos = resposta
    );
  }
}

fetch(this.url).then(resposta => {
  return resposta.json();
}).then(saida => this.eventos = saida);
*/