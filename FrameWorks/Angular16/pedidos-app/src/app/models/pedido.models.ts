import { Cliente } from "./clintes.models";
import { Produto } from "./produto.models";

export class Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public produtos: Produto[],
    public desconto: number
  ) {}

  calcularTotal(): number {
    const total = this.produtos.reduce((acc,p)=> acc + p.preco, 0);
    return total - (total*(this.desconto/100));
  }
}
