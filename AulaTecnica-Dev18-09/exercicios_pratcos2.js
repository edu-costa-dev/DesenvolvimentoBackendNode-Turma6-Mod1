const prompt = require('prompt-sync')();

console.log("========= Gerador de Mensagem =========");

let usuario = prompt("Digite seu nome: ");
let curso = prompt("Digite o nome do seu curso: ");

let boasVindas = `Olá. ${usuario}! Seja bem vindo(a) ao curso ${curso}.`;

console.log("\n "+ boasVindas);