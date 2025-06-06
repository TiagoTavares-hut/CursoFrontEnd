// Script Para Listar Tarefas -> DOM

document.body.style.backgroundColor = "lightskyblue";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa");//input
tarefa.style.width = "70%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "5px";
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "green";
btnEnviar.style.color = "aliceblue";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";

//lógica de funcionamento para Listar Tarefas
btnEnviar.addEventListener("click", criarTarefa
);

function criarTarefa(){
    let texto = tarefa.value.trim();// trim remove os espaços em branco // pegar o que foi digitado no input
    if(texto === ""){
        return;
    }// se o texto for vazio não cria a tarefa
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removeTarefa(this)" class="btnRemover">Remover</button>';
    //adicionar li -> ul //o li sera filho da ul
    let ul = document.querySelector("ul");
    ul.appendChild(li);
    //apaga o campo do input após adicionar a tarefa
    tarefa.value = "";
}

//lógica de funcionamento para Remover Tarefas
function removeTarefa(botao){
    botao.parentNode.remove();
}

// Mudar de cor 
document.getElementById("btnMudar").addEventListener("click", function() {
    container.style.width = "50%";
    container.style.backgroundColor = "lightblue";
    container.style.margin = "auto";
    container.style.padding = "30px";
    container.style.borderRadius = "15px";
    let cores = ["red", "blue", "green", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});

    

