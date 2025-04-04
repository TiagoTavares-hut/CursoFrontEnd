// script para as perguntas e respostas

let perguntas = [];
let perguntaAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do Arquivo JSON
//json é um arquivo de armazenamento de dados nao relacional
fetch("perguntas.json")//fetch pode ser usado para carregar arquivos
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
//o catch serve para capturar erros, se der erro ele mostra no console
}).catch(error => console.error("Erro ao carregar perguntas: ", error));

//criar a funcao para carregar as perguntas no html
function carregarPerguntas(){
    resultadoElement.innerText ="";
    proximaElement.disabred = true;

    if(perguntaAtual>=perguntas.length){// quando o index for maior ou igual ao numero de perguntas
        perguntaElement.innerText = "Quiz concluido";
        opcoesElement.innerHTML = "";
        proximaElement.style.display = "none";
        return;//return é para parar a funcao
    }
    //ecrever codigo para mostrar as perguntas
    let p = perguntas[perguntaAtual];//colegacao referente ao indice 
    perguntaElement.innerText = p.pergunta;
    opcoesElement.innerHTML = "";
    //prencher as opcoes
    p.opcoes.forEach( opcao => {
        let btnOpcao = document.createElement("button");
        btnOpcao.innerText = opcao;
        btnOpcao.classList.add("opcao");//classe opcao
        btnOpcao.addEventListener("click",() => verificarResposta(opcao, btnOpcao));
        opcaesElement.appendChild(btnOpcao);
    });

// funcao para verificar a respostas
function verificarResposta(opcao, btnOpcao){
    let respostaCorreta = perguntas[perguntaAtual].resposta;

    if(opcao === respostaCorreta){
        btnOpcao.classList.add("correta");
        resultadoElement.innerText = "Correto!!!";
    }else{
        btnOpcao.classList.add("errado");
        resultadoElement.innerText = "Errado!!! A resposta correta era: " +respostaCorreta;
    }
    //desabilitar os botoes
    document.querySelectorAll(".opcao").forEach( botao => botao.disabled = true);
    proximaElement.disabled = false;
    //fim da função verificarResposta
}
// adicionar evento para o botão da próxima pergunta
proximaElement.addEventListener("click",() => {
    perguntaAtual++;
    carregarPerguntas();
});
}