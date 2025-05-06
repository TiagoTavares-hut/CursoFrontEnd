// Classe Produto (estoque) 
// Atributos: nome, preco, quantidade
// metodos: vender(qtd), repor(qtd), exibirInfo()

class Produto {
    construtor (nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco; 
        this.quantidade = quantidade;
    }
    // Método para vender uma quantidade de produtos
    vender(qtd) {
        if (qtd > this.quantidade) {
            console.log(`Quantidade insuficiente de ${this.nome} em estoque.`);
        }
        else {
            this.quantidade -= qtd;
            console.log(`Vendeu ${qtd} de ${this.nome} `)
        }
    }
}