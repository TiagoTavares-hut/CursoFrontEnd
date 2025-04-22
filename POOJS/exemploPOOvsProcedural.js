//diferenca entre POO e Procedural(estrutural)

//procedural
//declaracao de variavel
let produto = {
    nome: "Celular",
    preco: 1000,
    desconto: function(){
        return this.preco * 0.1;
    } 
}//coleção

let produto2 = {
    nome: "Camera Digital",
    preco: 5000,
    desconto: function(){
        return this.preco * 0.1;
    }
}//coleção

//X

// poo - classe de produtos

class Produto{
    //atributos
    #nome; // # privado
    #preco;// # privado


    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    //criar metodos getter e setter
    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }
    desconto(){
        return this.preco * 0.1;//erro ao chamar o this.preco, pois o atributo é privado
    }
}

//intaciar um objeto
let p1 = new Produto("Impressora", 2000);
let p2 = new Produto("tablet", 1500);


//exemplo de uso de poo
class Pessoa{
    //atriboutos privados
    #nome;
    #idade;
    #cpf;

    constructor(nome, idade, cpf){
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    //metodos publicos
    get getNome(){
        return this.#nome;
    }
    get getIdade(){
        return this.#idade;
    }
    get getCpf(){
        return this.#cpf;
    }

    set setIdade(idade){
        this.#idade = idade;
    }
    //metodos Informacoes
    exebirInfor(){
        console.log(`Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`

        );
    }
}

let pessoa1 = new Pessoa("Tiago", 18, "123.456.789-00");
let pessoa2 = new Pessoa("Lucas", 38, "346.576.789-00");

pessoa1.exebirInfor();
pessoa2.exebirInfor();
 
pessoa1.setIdade = 20;//atualizei a idade da pessoa1
pessoa1.exebirInfor();

//heranças (extends)

class Funcionario extends Pessoa {
    //atributoa privado
    #cargo;
    #salario;

    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade, cpf);
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //metodos publicos
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    set setCargo(cargo){
        this.#cargo = cargo;
    }

    //metodos exibirInfo
    exibirInfo(){
        super.exibirInfo(); //chama o metodo da superclasse
        console.log(`Cargo: ${this.getCargo} \nSalario: ${this.getSalario}`);        
    }
}

let Funcionario1 = new Funcionario("regina", 38, "147.456.789-00", "Desenvolvedor", 5000);

funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo(); //exibir as informações atualizadas