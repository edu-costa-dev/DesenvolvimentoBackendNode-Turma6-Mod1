const prompt = require('prompt-sync')();

console.log("Quantos anos terá em 2035?");
let minhaIdadeFutura = 30 + (2035 - 2026)
console.log(`Nascendo você terá: ${minhaIdadeFutura}`);

console.log("======================");

console.log("Mostrando o dobro e a metade: ")
let numero = Number(prompt("Insira um numero: "));
let dobro = numero * 2;
let metade = numero / 2;
console.log(`O dobro é: ${dobro}. A metade é: ${metade}.`);