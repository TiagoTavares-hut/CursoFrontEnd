//parte1
let texto = document.getElementById("texto");
console.log(texto);

let paragrafo = document.querySelector("paragrafo");
console.log(paragrafo);
//parte2	
let botao = document.getElementById("botao");
botao.addEventListener("click", function() {
    texto.innerText = "texto novo";
    paragrafo.innerText = "paragrafo novo";
});

document.getElementById("btnColor").addEventListener("click", OutraCor
)
//parte3
function OutraCor(){
    let booy = document.querySelector("body");
    booy.style.backgroundColor = "blue";
}
//parte4
texto.classList.add("descricao");

document.querySelector(".descricao").style.backgroundColor = "red";
  