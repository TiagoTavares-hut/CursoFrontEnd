// class calculadora
// nivel 1 - Exercício 3
// criar uma classe chamada calculadora com os Métodos: somar(a, b), subtrair(a, b), multiplicar(a, b), dividir(a, b)
// e usar o medotos estaticos
class Calculadora{
    // metodo para somar dois numeros
    static somar(a, b) {
        return a + b;
    }
    // metodo para subtrair dois numeros
    static subtrair(a, b) {
        return a - b;
    }
    // metodo para multiplicar dois numeros
    static multiplicar(a, b) {
        return a * b;
    }
    // metodo para dividir dois numeros
    static dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }

}

console.log(Calculadora.somar(18, 5)); 
console.log(Calculadora.subtrair(8, 9)); 
console.log(Calculadora.multiplicar(4, 29)); 
console.log(Calculadora.dividir(10, 5)); 
console.log(Calculadora.dividir(10, 0)); // Error: Divisão por zero não é permitida.