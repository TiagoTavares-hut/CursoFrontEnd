import { Injectable } from '@angular/core';
import { Cliente } from '../models/clintes.models';
import { Produto } from '../models/produto.models';
import { Pedido } from '../models/pedido.models';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }

  // Métodos
  getClientes(): Cliente[] {
    return this.clientes;
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  } 

  getProdutos(): Produto[] {
    return this.produtos;
  }
  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  getPedidos(): Pedido[] {
    return this.pedidos;
  }
  adicionarPedidos(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

}
