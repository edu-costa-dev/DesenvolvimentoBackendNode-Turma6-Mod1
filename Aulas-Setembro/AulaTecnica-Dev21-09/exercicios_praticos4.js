const prompt = require('prompt-sync')();

console.log("======= Sistema de cinema")
const idade = Number(prompt("Digite sua idade?: "));
const estudante = 'sim' === prompt("Você é estudante?: ");

console.log(`Tem direito à meia-entrada? ${estudante || idade >= 60}`);
