// calculadora simple em JavaScript
// funçães de calculo

var prompt = require("prompt-sync")();

// function é um bloco de código que executa uma tarefa ou calcula um valor
// return é o valor que a function vai retornar
// let é uma variavel de escopo local que

function soma(a, b) {
  return a + b;
}
// subtração
function subtracao(a, b) {
  return a - b;
}
// multiplicação
function multiplicacao(a, b) {
  return a * b;
}
// divisão
function divisão(a, b) {
  return a / b;
}

// menu
function menu() {
  let operacao;
  let numero1;
  let numero2;
  let resultado;
  console.log("====Calculadora Simples====");
  console.log("=Escolha a Operação Desejada=");
  console.log("| 1. Soma                    |");
  console.log("| 2. Subtração                |");
  console.log("| 3. Multiplicação            |");
  console.log("| 4. Divisão                  |");
  console.log("==============================");
  operacao = prompt();
  numero1 = Number(prompt("Informe o primeiro numero: "));
  numero2 = Number(prompt("Informe o segundo numero: "));
  switch (operacao) {
    case "1":
      resultado = soma(numero1, numero2);
      break;
    case "2":
      resultado = subtracao(numero1, numero2);
      break;
    case "3":
      resultado = multiplicacao(numero1, numero2);
      break;
    case "4":
      if (numero2 == 0) {
        console.log("Não dividirás por zero");
        resultado = null;
      } else {
        resultado = divisão(numero1, numero2);
      }
      break;
    default:
      console.log("Operação inválida");
      resultado = null;

      break;
  } // fim da função switch
  console.log("O resultado é " + resultado);
}

// aplicar a função menu
var continuar = true;
while (continuar) {
  menu();
  let escolha = prompt("1. Continuar // 2. Sai");
  if (escolha == 2) {
    continuar = false;
    console.log("Saindo...");
  }
}
