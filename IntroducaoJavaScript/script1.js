// Tipos de Operaçoes

// Operadores Aritimeticos (+,-,*,/,%)

var a = 10;
var b = 3;
console.log("Soma: " + (a+b));// 13
console.log("Subtracao: " + (a-b)); // 7
console.log("Multiplicacao: " + (a*b)); // 30
console.log("Divisao: " + (a/b)); // 3.333
console.log("Resto: " + (a%b)); // 1

// Operadores Relacionais (>,>=,<,<=,==,===)
// Sempre vai retornar true ou false
// tudo que eu ponho "" é uma string - texto
var a = 10;
var b = 20;
var c = "10";

console.log("Relacionais: " + (a>b)); // false
console.log("Igualdade Simples: " + (a==c)); // true
console.log("Igualdade Estrita: " + (a===c)); // false

// Operadores Logicos (&&, E, ||, OU, !-nao)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovaçao: "+ (nota1 > 7 && nota2 > 7)); // false
console.log("Aprovaçao: "+ (nota1 > 7 || nota2 > 7)); // true
console.log(!false); // true