import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  url: string = "http://localhost:3200/";

  constructor(private http: HttpClient) { }

  // criamos uma função publica para ser chamada na nossa aplicação
  // criamos a função com o Observable para que essa função espere um retorno de uma requisição
  // O Observable utiliza o modelo da Interface para aguardar um retorno exato de lista de eventos do tipo do Objeto Evento
  // como o Observable espera um retorno, colocamos na função um return para a requisição do get usado por meio do httpClient (http)
  // a requisição esperada é esperado, como no Observable, uma lista de eventos do tipo do OBjeto Evento
  // e por fim, passamos a URL da requisição para trazer um retorno
  public getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url + "eventos");
  }
}
