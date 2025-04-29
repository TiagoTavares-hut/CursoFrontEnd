// Atividade 2: criar uma class representando um veiculo
// atributos: marca, modelo, ano
// metodos: exibirInfo()
// crie uma subclasse Carro, que herda de Veiculo e adiciona

class Carros{
    #marca
    #modelo
    #ano
    //construtor
    constructor(marca, modelo, ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }
    //metodos
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }
}
// sub
class Carro extends Carros{

    #qtdPortas
    constructor(marca, modelo, ano, qtdPortas){
        super(marca, modelo, ano); //chama o pai
        this.qtdPortas = qtdPortas;
    }

    // Sobrescrevendo o método exibirInfo
    exibirInfo(){
        super.exibirInfo();
        console.log(`Quantidade de Portas: ${this.#qtdPortas}`);
    }
}

//instanciar um objeto

let carro1 = new Carro("Volkswagen", "brasilia", 1976, 2);
carro1.exibirInfo();