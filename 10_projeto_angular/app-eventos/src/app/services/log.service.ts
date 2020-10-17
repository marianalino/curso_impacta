import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LogService {
  showLog = environment.featureFlag.showLog;

  constructor() { }

  show(type, ...value) {
    if (this.showLog) { // baseado em ambiente de desenvolvimento - produção
      const hora = "> " + new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

      switch (type) {
        case 'error':
          console.error(hora);
          console.error(value);
          break;
        case 'info':
          console.info(hora);
          console.info(value);
          break;
        case 'debug':
          console.debug(hora);
          console.debug(value);
          break;
        case 'warning':
          console.warn(hora);
          console.warn(value);
          break;
        default: // é o else do if
          console.log(hora);
          console.log(value);
          break;
      }
    }
  }
}
