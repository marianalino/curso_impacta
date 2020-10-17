import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InserirEventoComponent } from './components/inserir-evento/inserir-evento.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './components/shared/shared.module';
import { VerEventoComponent } from './components/ver-evento/ver-evento.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './components/remover-evento/remover-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    NotFoundComponent,
    ListaEventosComponent,
    InserirEventoComponent,
    VerEventoComponent,
    EditarEventoComponent,
    RemoverEventoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
