//adicionar elementos avançados com DOM
//contruir um cabeçalho com DOM (Header)

let header = document.createElement("header"); //criou elementos
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header);//adicionando o header como elementos filho do body
document.body.style.margin = "0";//retirando a margin do body

//adicionar elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex"
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue"
divNav.style.height = "100%";
divNav.style.alignItems = "center"
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS"

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];
//adicionar itens na Nav
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
});

//Façam um Rodapé com DOM

let footer = document.createElement("footer");

footer.style.backgroundColor = "black";
footer.style.height = "10vh";
footer.style.position = "absolute";
footer.style.bottom = "0";
footer.style.width = "100%";

document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.display = "flex";
divFooter.style.justifyContent = "space-between";
divFooter.style.height = "100%";
divFooter.style.width = "90%";
divFooter.style.magin = "0 auto";
divFooter.style.alignItems = "start";
divFooter.style.color = "aliceblue";
divFooter.style.fontSize = "2vh";
divFooter.style.fontFamily = "Comic Sans MS";

footer.appendChild(divFooter);

let menuFooter = ["End. Rua senai, 1000", "tel: (11) 9999-9999", "email: 1XK0M@example.com"];

menuFooter.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    divFooter.appendChild(p);
});

// Clonabdo Elementos com DOM
let card = document.createElement("div");
card.classList.add("card"); // adiciona a classe card no elemento
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "blue";
// criar comtainer para adicionar os cards
let container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap";
//criar um botão para adicionar os cards
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";
document.body.appendChild(btnClonar);//add btn ao body
document.body.appendChild(container);//add container ao body
container.appendChild(card);//add card ao container
//adicionar evento ao botão
btnClonar.addEventListener("click", () => {
    let clone = card.cloneNode(true);//cria um clone do card
    container.appendChild(clone);//add o clone ao container
})

//criar chave para adicionar modo escuro
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";

document.body.appendChild(chave);
//criar um evento para adicionar o modo escuro
chave.addEventListener("change", () => { //change = mudar
    document.body.classList.toggle("darkMode");
})

//eventos avançados com DOM
//capturando letra digitada -> function 
document.addEventListener("keydown", (evento) => {
    console.log("Tecla pressionada: " + evento.key);
})

//função para sugestão de texto -> 
let input = document.createElement("input");
input.type = "text";
input.id = "busca";
input.placeholder = "Digite para busca...";
document.body.appendChild(input);
//criar uma lista de sugestões
let lista = document.createElement("ul");
lista.id = "sugestaoes";
document.body. appendChild(lista);
//criar um vetor de sugestões
let sugestoes = [
    "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Kotlin"
];

//evento para capturar o texto e sugerir
document.getElementById("busca").addEventListener("keyup", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach( sugestao => {
        if(sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");
            item.style.cursor = "pointer";
            item.addEventListener("click",()=>{
                input.value = sugestao;
                lista.innerHTML = "";
            })
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    });

});

//criação de formulario e evento de verificação
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu Nome";
inputNome.id = "nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu Email";
inputEmail.id = "email";
form.appendChild(inputEmail);

//botão de envio do form 
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

//adicionar um "p" para mostar as mensagens de validacao do form
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);
//evento de velidacao do formulario

document.getElementById("formCadastro").addEventListener("submit", (event)=>{
    event.preventDefault();// nao recarregar a pagina
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");
    if(nome == "" || email == ""){
        mensagem.innerText = "Preencha todos os campos";
        mansagem.style.color = "red";
    } else{
        mensagem.innerText = "Formulario enviado com sucesso";
        mensagem.style.Color = "green";
        //limpar os campos
        nome = "";
        email = "";
    }
})