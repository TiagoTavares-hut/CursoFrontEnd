// Introdução JavaScript

// Tipos de Dados(escopo, tipagem)

// tipo string - texto
var nome = "Tiago"; // variavel de escopo global
nome = "Tiago"; // redefinir o valor
var nome = "Lucas"; // redeclaração da var

// tipo number - numero
let idade = 25; // variavel de escopo local
idade = 26; // redefinir o valor - ok
// let idade = 27; // erro redeclarar

const PI = 3.1415; // constante
// PI = 3.1416; // erro -não pode redefinir
// PI = 3.6546;
// let conseguimos redeclarar 

// tipo boolean
var aprovado = true;

// tipo undefined
var media;

// tipo null
var info = null;


console.log("nome: " + nome); // imprimir no terminal
console.log("idade: " + idade); // Namber
console.log("PI: " + PI);
console.log("aprovado: " + aprovado);
console.log("media: " + media);
console.log("info: " + info);