import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InserirEventoComponent } from './components/inserir-evento/inserir-evento.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    path: 'lista-eventos',
    component: ListaEventosComponent
  },
  {
    path: 'inserir-evento',
    component: InserirEventoComponent
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
