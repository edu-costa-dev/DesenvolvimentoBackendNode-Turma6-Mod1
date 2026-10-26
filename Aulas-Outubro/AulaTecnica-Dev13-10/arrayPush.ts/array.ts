import prompt require('prompt-sync');
const catalogo = [];

for (let indice = 0; indice <= 3; indice++){
let nome = prompt(`Digite o nome do produto ${indice}: `);
let preco = Number(prompt("Digite o valor do produto: "));
catalogo.push({id: indice, nome: nome, preco: preco});
}
