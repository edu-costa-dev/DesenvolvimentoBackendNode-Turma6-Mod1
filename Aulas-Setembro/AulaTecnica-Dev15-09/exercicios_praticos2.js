const prompt = require('prompt-sync')();

console.log("Calculadora de Soma");
let num1 = Number(prompt("Digite o primeiro valor: "));
let num2 = Number(prompt("Digite o segundo valor: "));
let soma = num1+num2;
console.log(`A soma é: ${soma}`);

console.log("Calculadora de Média");

let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let media = (nota1+nota2)/2
console.log (`A Média é: ${media}`);