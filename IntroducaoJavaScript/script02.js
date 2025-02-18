// Estrutura de dados 

// Condicional (if - else, switch case)
// if
var precoproduto = 150;
if(precoproduto < 100){
    console.log("Valor a Pagar: R$: " + (precoproduto*0.9));
}
else{
    console.log("Valor a Pagar: R$: " + (precoproduto));
}

///switch case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    
        case 2:
        console.log("Fevereiro")
        break;
        
        case 3:
        console.log("Março")
        break;
        
        case 4:
        console.log("Abril")
        break;
}

// Estrutura de Repetição
// for (Contáveis)

for(let i = 0; i<=100; i++){ 
    console.log(i);
}

// while (Nao contaveis)

var continuar = true;// condicao de parada
// a parada acontece quando essa condicao for falsa
var numeroEscolhido = 3;
var contador = 0;
while(continuar){ 
    contador++;
    let numeroSortiado = Math.round(Math.random()*10);// gera um numero aleatorio de 0 a 10
    if(numeroEscolhido == numeroSortiado){
    continuar = false;
    console.log("Acertou miseravel");
}
    console.log("Tentativa: " + contador);
}

// Funçães (Acão específica) podendo ser chamada a qualquer momento dento do codigo

function ola (nome){ // function return
    return "Olá, " + nome;
}

function hello (nome){ // function void
    console.log("Hello, " + nome);
}

console.log(ola("Tiago"));
hello("Tiago");