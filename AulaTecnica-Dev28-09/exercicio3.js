const prompt = require('prompt-sync')();

const idade = [];

for (let indice = 0; indice < 5; indice++) {
    idade [indice] = prompt(`Digite a idade da pessoa ${indice + 1}: `);
}

const maiorIdade = idade.find((idade) => idade >= 60);

if (maiorIdade >= 60) {
    console.log(`A idade da pessoa idosa é: ${maiorIdade} anos.`);
} else {
    console.log(`Não há pessoas idosas.`);
}