import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
//import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  //constructor() { }
  constructor(private clienteService: ClienteService) { }


  ngOnInit() {
    //this.clientes = CLIENTES;
    //this.clientes = this.clienteService.getClientes();

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );

  }

}
