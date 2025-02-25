//declaração de um array "[]"
let Array = []; //array dinamico

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arraytexto = ["Sapato", "Caixa", "Meia"];
let arrayMisto = [1, "José", true];

// tamanho de uma array (length)
console.log(arrayNumeros.length); //9

// arrayNumeros
// 1, 2, 3, 4, 5, 6, 7, 8, 9
// 0, 1, 2, 3, 4, 5, 6, 7, 8

// acessar um elemento do array (array[index])
console.log(arraytexto[1]); //2

// adicionar um elemento ao array
// no comeco (unshift)
arraytexto.unshift("Tênis");
console.log(arraytexto);
// no final (push)
arraytexto.push("Chinelo");
console.log(arraytexto);

//trocar um valor
arraytexto[2] = "Sacola";
console.log(arraytexto);

//remover um elemento do array
//no comeco (shift)
arraytexto.shift();
console.log(arraytexto);
//no final (pop)
arraytexto.pop();
console.log(arraytexto);

//percorrer um array (laco de repeticao)
//percorrer o array de numeros
for (let i = 0; i < arrayNumeros.length; i++) {
  console.log("índice[" + i + "]=" + [arrayNumeros[i]]);
}

//forEach
//quando eu escrevo => ele executa a funcao
arraytexto.forEach((elemento) => {
  console.log(elemento);
});

// Métodos úteis

//indexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (não existe)

//Splice (remover elemento de uma pocição)
arrayMisto.splice(1, 2);
console.log(arrayMisto);

// Operaçoes Avancadas de Arrays
// map - comparacao
let valores = [10, 20, 30, 40, 50];
let valoresDobra = valores.map((x) => x * 2);
console.log(valoresDobra);
//filter - comparacao
let valoresFilter = valores.filter((x) => x > 25);
console.log(valoresFilter);

//desafio (filter x<35) && (x*3) = [30, 60, 90]
let valoresDesafio = valores.filter((x) => x < 35).map((x) => x * 3);
console.log(valoresDesafio);

// reduce ([] -> let x)
let soma = valores.reduce((ValorSoma,ValorElemento) => ValorSoma + ValorElemento);
console.log(soma);
//sort (organizar)
let aleatorio = [7, 2, 5, 1, 9, 3, 6, 4, 8];
console.log(aleatorio);
let organado = aleatorio.sort();
console.log(organado);
