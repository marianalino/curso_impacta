import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-inserir-evento',
  templateUrl: './inserir-evento.component.html',
  styleUrls: ['./inserir-evento.component.scss']
})
export class InserirEventoComponent implements OnInit {
  evento: Evento;

  constructor(
    private location: Location,
    private webservice: WebserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.evento = {
      descricao: '',
      data: '',
      preco: 0
    };
  }

  incluir(evento: Evento): void {
    this.webservice.postEvento(evento).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }

  cancelar() {
    this.location.back();
    return false;
  }

}
