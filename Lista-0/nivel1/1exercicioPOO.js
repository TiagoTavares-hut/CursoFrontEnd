// Fundamentos de Classes e Objetos
// nivel 1 - Exercício 1
// criar uma class Pessoa // atributos: nome, idade metodo: apresentar() (exibe uma frase com nome e idade)
class Pessoa {
    // construtor para inicializar os atributos
    constructor(nome, idade, trabalho) { // o construtor é um metodo especial que é chamado quando a classe é instanciada
        // this faz referencia ao objeto atual
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
    }
    // metodo para apresentar a pessoa
    apresentar() { // o apresentar é um metodo da classe Pessoa
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos. E meu trabalho é ${this.trabalho}`); // o console.log é uma função que exibe uma mensagem no console
    }// o ${this.nome} é uma interpolação de string, que permite incluir o valor da variavel nome dentro da string
}

// metodo para alterar o nome da pessoa
const pessoa1 = new Pessoa('Diogo', 30 , 'programador'); // o new cria uma nova instancia da classe Pessoa
pessoa1.apresentar(); // saida
