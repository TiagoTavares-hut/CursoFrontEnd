// class livro 
// nivel 1 - Exercício 2
class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
}
    // metodo para apresentar o livro
    apresentar() {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`); 
    }
}
// instanciando a classe Livro
const livro1 = new Livro('Cartas de um diabo a seu aprendiz', 'C.S. Lewis', 1942);
const livro2 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
const livro3 = new Livro('As Crônicas de Nárnia', 'C.S. Lewis', 1950);
const livro4 = new Livro('O Hobbit', 'J.R.R. Tolkien', 1937);
livro1.apresentar();
livro2.apresentar();
livro3.apresentar();
livro4.apresentar();