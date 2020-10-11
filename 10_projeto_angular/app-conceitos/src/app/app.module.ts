import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppExemplo1Component } from './components/app-exemplo1/app-exemplo1.component';
import { AppExemplo2Component } from './components/app-exemplo2/app-exemplo2.component';
import { AppExemplo3Component } from './components/app-exemplo3/app-exemplo3.component';

@NgModule({
  declarations: [
    AppComponent,
    AppExemplo1Component,
    AppExemplo2Component,
    AppExemplo3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
