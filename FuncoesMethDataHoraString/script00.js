// funçae de matematica
// SQRT e POW (Quadrada de 25)
// calcular a raiz quadrada de 25
console.log(Math.sqrt(25)); // 5
// calcular a potencia de um numero pelo outro
console.log(Math.pow(7, 2)); //7² = 49
console.log(Math.pow(4, 3)); //4³ = 64
console.log(Math.pow(27,1/3)); // ³√27 = 3

// funcaes de arredondamento (ceil, floor, round)
//O Floor arredonda para baixo e o ceil arredonda para cima
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

//Números aleatorios (Math.random)
console.log(Math.random());// gera um número aleatorio entre 0 e 1
console.log(Math.random()*1000);// gera um número aleatorio entre 0 e 999,99

// Valor Absoluto
console.log(Math.abs(-10)); // 10 ele converte para positivo

// Minimo e Maximo
console.log(Math.min(1,2,3,4,5,6,7,8,9,)); // 1
console.log(Math.max(1,2,3,4,5,6,7,8,9,)); // 9