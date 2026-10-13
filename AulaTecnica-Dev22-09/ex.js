const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite uma nota de 0 a 10: "));

while (numero < 0 || numero > 10) {
    console.log("Nota inválida. Digite uma nota de 0 a 10.");
    numero = Number(prompt("Digite uma nota de 0 a 10: "));
}

console.log(`Nota registrada com sucesso: ${numero}`);  