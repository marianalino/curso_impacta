import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InserirEventoComponent } from './components/inserir-evento/inserir-evento.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RemoverEventoComponent } from './components/remover-evento/remover-evento.component';
import { VerEventoComponent } from './components/ver-evento/ver-evento.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'eventos',
    component: ListaEventosComponent
  },
  {
    path: 'eventos/novo',
    component: InserirEventoComponent
  },
  {
    path: 'eventos/ver/:id',
    component: VerEventoComponent
  },
  {
    path: 'eventos/editar/:id',
    component: EditarEventoComponent
  },
  {
    path: 'eventos/remover/:id',
    component: RemoverEventoComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
