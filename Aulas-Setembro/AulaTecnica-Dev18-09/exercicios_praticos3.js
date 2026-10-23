const prompt = require("prompt-sync")();

const nome = prompt("Insira seu nome completo: ");
const maiusculo = nome.trim().toUpperCase();
console.log(maiusculo);


// padronizador de nomes. 
const contemLetraA = nome.includes('a');
const primeirasLetras = nome.slice(0, 3);

console.log(`A palavra contém a letra 'a'?: ${contemLetraA}.`);
console.log(`As tres primeiras letras são: ${primeirasLetras}.`);