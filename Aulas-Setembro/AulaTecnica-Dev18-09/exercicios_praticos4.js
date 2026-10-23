const prompt = require('prompt-sync')();

const minimoRenda = 3000;
const minimoScore = 700;

const renda = Number(prompt("Digite a renda mensal: "));
const score = Number(prompt("Digite o score: "));

let aprovado = renda >= minimoRenda && score >= minimoScore;

console.log(`Emprestimo aprovado? ${aprovado}`);
