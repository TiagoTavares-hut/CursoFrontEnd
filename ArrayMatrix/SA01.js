//Criar um programa que receba Varias Notas e calcule a Media
const prompt = require("prompt-sync")();

let vetorNotas = [];

let contador = 0;
let continuar = true;
while (continuar) {
  console.log("|1. Digite a Nova Nota |");
  console.log("|2. Calcular a Media   |");
  console.log("|3. Sair               |");
  let operacoe = prompt("Ecolha a Operaçao Desejada: ");

  switch (operacoe) {
    case "1":
      contador++;
      let nota = Number(prompt("Digite a Nota do Aluno " + contador + ": "));
      vetorNotas.push(nota);
      break;
    case "2":
      let media = vetorNotas.reduce((x, y) => x + y, 0) / vetorNotas.length;
      console.log("A media da Sala é " + media);
      break;
    case "3":
      continuar = false;
      console.log("Saindo...");
    default:
      break;
  }
}
