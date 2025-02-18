// Desafio 1
const idade = prompt("Digite sua idade:");

if (isNaN(idade)) {
    console.log("Idade inválida. Por favor, digite sua idade.");
} else {
    const idadeNumerica = parseInt(idade);
    if (idadeNumerica < 18) {
        console.log("Voce é menor de idade.");
    } else if (idadeNumerica < 65) {
        console.log("Voce é maior de idade.");
    } else {
        console.log("Voce é idoso.");
    }
}

// Desafio 2
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }

// Desafio 3
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

// Desafio1 professor
var prompt = require("prompt-sync")();

var Idade = prompt("Informe sua idade");

if(idade<18){
    console.log("Menor de idade");
} else if(idade<60){
    console
}

// Desafio2 professor
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }

  // Desafio3 professor
  for (let i = 1; i <= 20; i++) {
    // imprimir apenas os números pares
    let resto = i / 2;
    if(resto == 0){
      console.log(i);
    }
  }