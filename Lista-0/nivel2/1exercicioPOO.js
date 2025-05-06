// Nível 2 – Métodos, Condições e Validações
// atributos: nome, notas (array)
// Métodos: adicionarNota(nota), calcularMedia(), situacao() → (Aprovado se média ≥ 7)

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = [];
    }

    // Método para adicionar uma nota ao array de notas
    adicionarNota(nota) {
        this.notas.push(nota);
    }

    // Método para calcular a média das notas
    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        return somaNotas / this.notas.length;
    }

    // Método para determinar a situação do aluno com base na média
    situacao() {
        const media = this.calcularMedia();
        return media >= 7 ? "Aprovado" : "Reprovado";
    }
}

const aluno1 = new Aluno("João");
aluno1.adicionarNota(8);
aluno1.adicionarNota(6);
aluno1.adicionarNota(7);

console.log(`Nome: ${aluno1.nome}`);
console.log(`Média: ${aluno1.calcularMedia().toFixed(2)}`);
console.log(`Situação: ${aluno1.situacao()}`);