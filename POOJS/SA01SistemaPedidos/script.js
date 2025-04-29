//criar a logica do sistema de pedidos

// modelar as class

class Cliente{
    //atributos
    #id
    #nome
    #cpf
    //construtor
    constructor(id, nome, cpf){
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
    }
    //metodos getters and setter
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getCpf(){
        return this.#cpf;
    }
}

class Produto{
    #id
    #nome
    #preco
    constructor(id, nome, preco){
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getPreco(){
        return this.#preco;
    }
}

class Pedido{
    #id
    #cliente
    #itens
    #desconto
    #valorTotal
    constructor(id, cliente, itens, desconto){
        this.#id = id;
        this.#cliente = cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.#valorTotal = this.calcularValorTotal();
    }
    getId(){
        return this.#id;
    }
    getCliente(){
        return this.#cliente;
    }
    getItens(){
        return this.#itens;
    }
    getDesconto(){
        return this.#desconto;
    }
    getValorTotal(){
        return this.#valorTotal;
    }
    
    calcularValorTotal(){
        let total = this.#itens.reduce((acc, item) => acc + item.produto.getPreco() * item.quntidade);
         total = ((this.#desconto/100) * total);
    }
}

//class controller //gerenciar os pedidos

class SistemaPedidos{
    constructor(){
        this.cliente = [];
        this.pordutos = [];
        this.pedidos = [];
    }
    //métodos do controller

    cadastrarCliente(){
        const nome = document.getElementById("nomeCliente").value;
        const cpf = document.getElementById("cpfCliente").value;
        if (!nome.trim() || !cpf.trim()) {  //verifica se todos os campos estão preenchidos
            alert("Preencha todos os campos!");
            return;
        }
        const cliente = new Cliente(this.clientes.length + 1,)
        //adicionar o cliente ao array de clientes
        this.clientes.push(cliente);
        //limpar os campos do formulario
        document.getElementById("nomeCliente").value = "";
        document.getElementById("cpfCliente").value = "";

        this.atualizarClientes();
    }

    atualizarClientes(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";
        const select = document.getElementById("selectCliente");
        select.innerHTML = "<option value=''>Selecione um Cliente</option>";
        this.clientes.forEach( cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.getNome();
            lista.appendChild(li);
            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();
            select.appendChild(option);
        });
    }
}
//instanciar objeto da class controller
const sistema = new SistemaPedidos();
//adiconar o evento de click no botao
document.getElementById("cadastrarCliente").addEventListener("click", sistema.cadastrarCliente());