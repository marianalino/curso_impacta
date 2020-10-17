import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-remover-evento',
  templateUrl: './remover-evento.component.html',
  styleUrls: ['./remover-evento.component.scss']
})
export class RemoverEventoComponent implements OnInit {
  evento: Evento;

  constructor(
    private webservice: WebserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.evento = {
      _id: '',
      descricao: '',
      data: '',
      preco: 0
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.webservice.getEvento(id).subscribe(resposta => {
      this.evento = resposta;
    });
  }

  remover(id): void {
    this.webservice.deleteEvento(id).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }

  cancelar() {
    this.router.navigate(['/eventos']);
    return false;
  }
}
