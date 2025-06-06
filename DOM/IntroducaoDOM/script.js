//script de manipulação DOM

//getElementById -> variável simples
let titulo = document.getElementById("titulo"); //html -> id
console.log(titulo);
titulo.innerText = "Outro titulo"; //modificar o conteudo da id

// getElementsByTagName ->variavel Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //html -> p
//modificar elemento
paragrafo[0].innerText = "Exemplo de paragrafo modificado por DOM";
//modificar style do elemento
paragrafo[1].style.color = "red";

// getElementByClassNAme -> variavel Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color = "blue";
};
//querySelector -> variavel simples -> ele seleciona apenas o primeiro elemento
let p = document.querySelector("p");
//modificacao de fonte
p.style.fontWeight = "bold";

//querySelectorAll -> variavel Vetor(Array) -> ele seleciona todos os elementos
let descricaoAll = document.querySelectorAll(".descricao"); //no querySelectorAll para selecionar class usa o ponto
descricaoAll.forEach(elemento => {
    elemento.style.fontWeight = "bold";
});

//eventos listener(ouvinte)

function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

//chamendo direto no Script o ouvinte
document.getElementById("btnColor").addEventListener("click", OutraCor
)

function OutraCor(){
    let booy = document.querySelector("body");
    booy.style.backgroundColor = "orange";
}