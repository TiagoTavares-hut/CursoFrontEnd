import { Cliente } from "./clintes.models";
import { Produto } from "./produto.models";

export class Pedido {
    constructor(
        public id: number,
        public cliente: Cliente,
        public produto: Produto[],
        public quantidade: number
    ) {}


  calcularTotal(): number {
    const total = this.produto.reduce((acc,p)=> acc + p.preco,0);
    return total - (total * (this.desconto / 100));
  }
}
