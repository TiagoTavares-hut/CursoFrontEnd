// Manipulação de string (Cadeia de Caracteres)

let texto = "Aula de JavaScript";

//contar quantos caracteres tem na string
console.log(texto.length); // 18

//MAIUSCULAS e minusculas
console.log(texto.toUpperCase()); // AULA DE JAVASCRIPT
console.log(texto.toLowerCase()); // aula de javascript

//parte da string
console.log(texto.substring(0,4)); // Aula
console.log(texto.slice(-10)); // JavaScript

//O replace substitui uma parte da string
//substituir parte da string
let texto2 = (texto.replace("Java", "Type")); // Aula de TypeScript
console.log(texto2);

//Tesoura(trim) - elimina espaços em branco no inicio e final da string
let texto3 = "    Aula de JavaScript    ";
console.log(texto3) //"    Aula de JavaScript    "
console.log(texto3.trim()); // "Aula de JavaScript"

//Ceparação de string
//O split divide cada parte da string
let linguagens = "JavaScript, Python, PHP, Java, C++";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

//desafio
//contar a quantidade de caracteres sem espaco
let desafio = "Bom Dia Com Muita Alegria";
let solucaoDesafio = desafio.replace(" ", "");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);