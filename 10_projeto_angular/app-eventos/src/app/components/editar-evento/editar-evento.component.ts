import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {
  evento: Evento;

  constructor(
    private webservice: WebserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.webservice.getEvento(id).subscribe(resposta => {
      this.evento = resposta;
      this.evento.data = moment(resposta.data).format('YYYY-MM-DD');
    });
  }

  alterar(evento: Evento): void {
    this.webservice.putEvento(evento).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }

  cancelar() {
    this.router.navigate(['/eventos']);
  }
}
