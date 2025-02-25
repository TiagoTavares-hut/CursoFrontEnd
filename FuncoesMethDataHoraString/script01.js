// funcoes de datas e horarios
let agora = new Date();
console.log(agora);
console.log(agora.toDateString());
console.log(agora.toLocaleString());

// Get components
//console.log(agora.getFullYear()); //ano
//console.log(agora.getMonth()); //mes 
//etc...

// Set components
// O set pode ser usado para mudar a data
//agora.setFullYear(2023); 
//agora.setMonth(11);

//operações de dadas e hora

let data1 = new Data("2025-02-04");
let data2 = new Data("2025-12-17");

let diferenca = data2-data1;

console.log(diferenca/(1000*60*60*24)); //calcular em dia