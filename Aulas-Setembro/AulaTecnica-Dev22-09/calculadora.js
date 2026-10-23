const prompt = require('prompt-sync')();

console.log("Calculadora");
console.log("======================");
console.log("Funções disponíveis:");
console.log("======================");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
console.log("======================");

let operacaoLogica = Number(prompt("Escolha a operação (1-4): "));
while (operacaoLogica < 1 || operacaoLogica > 4) {
    console.log("Operação inválida. Por favor, escolha uma operação entre 1 e 4.");
    operacaoLogica = Number(prompt("Escolha a operação (1-4): "));
}

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));

switch (operacaoLogica) {
    case 1:
        console.log(`Resultado da soma: ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`Resultado da subtração: ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`Resultado da multiplicação: ${numero1 * numero2}`);
        break;
    case 4:
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
        } else {
            console.log(`Resultado da divisão: ${numero1 / numero2}`);
        }
        break;
    default:
        console.log("Operação inválida. Por favor, escolha uma operação entre 1 e 4.");
}