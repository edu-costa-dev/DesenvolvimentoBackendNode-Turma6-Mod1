const prompt = require("prompt-sync")();
const catalogo = [];
for (let indice = 0; indice <= 3; indice++){
let nome = prompt(`Digite o nome do produto ${indice}: `);
let preco = Number(prompt("Digite o valor do produto: "));
catalogo.push({id: indice, nome: nome, preco: preco});
}
console.log("-------------------------------");
console.log("Array de objetos");
console.log(catalogo);
const bancoDeDadosJSON = JSON.stringify(catalogo);
console.log("-------------------------------");
console.log("JSON Formato");
console.log(bancoDeDadosJSON);
const dadosRecebido = JSON.parse(bancoDeDadosJSON);
console.log("Lendo dados desserializados: ");
dadosRecebido.forEach(item => {
    console.log(`Item #${item.id}: ${item.nome} - R$ ${item.preco.toFixed(2)}`);
});
