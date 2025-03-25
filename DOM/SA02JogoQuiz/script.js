// script para as perguntas e respostas

let perguntas = [];
let perguntaAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do Arquivo JSON
fetch("perguntas.json")
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
//o catch serve para capturar erros, se der erro ele mostra no console
}).catch(error => console.error("Erro ao carregar perguntas: ", error));

//criar a funcao para carregar as perguntas no html
function carregarPerguntas(){
    
}
