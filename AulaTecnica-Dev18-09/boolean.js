const prompt = require('prompt-sync')();

let idadeMinima = 18;
let idadeUsuario = Number(prompt("Digite a idade: "));

let autorizacao = idadeUsuario > idadeMinima;
console.log(`É maior de idade? Valor boolean: ${autorizacao}`)
autorizacao = idadeUsuario >= idadeMinima;
console.log(`É maior de idade? Valor boolean: ${autorizacao}`)