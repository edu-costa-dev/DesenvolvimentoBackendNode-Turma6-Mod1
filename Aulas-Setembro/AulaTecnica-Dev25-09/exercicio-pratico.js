const prompt = require('prompt-sync')();

function checarMaioridade(idade){
    if (idade >= 18) {
        return "Maior de idade.";
    } 
        return "Menor de idade.";
}

let idade = prompt("Digite a idade: ");
console.log(checarMaioridade(idade));
