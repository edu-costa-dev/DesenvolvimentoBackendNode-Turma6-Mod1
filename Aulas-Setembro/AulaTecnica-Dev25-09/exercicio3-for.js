const prompt = require('prompt-sync')();

const entrada = Number(prompt('Digite um número: '));
let soma = 0;

for (let contador = 0; contador <= entrada; contador++) {
    if (contador % 2 === 0) {
        soma += contador;
    }
}

console.log(`A soma dos números pares de 0 até ${entrada} é: ${soma}`);