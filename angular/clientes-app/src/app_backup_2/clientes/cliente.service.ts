import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }
/*
  getClientes(): Cliente[]{
    return CLIENTES;
  }
*/

  getClientes(): Observable<Cliente[]>{
    return of(CLIENTES);
  }

}
