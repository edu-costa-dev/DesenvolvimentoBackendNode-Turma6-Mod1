const prompt = require("prompt-sync")();

const despesas = {}

despesas.aluguel = Number(prompt("Digite o valor do aluguel: "));
despesas.mercado = Number(prompt("Digite o valor do Mercado: "));
despesas.energia = Number(prompt("Digite o valor da Energia: "));
despesas.internet = Number(prompt("Digite o valor da Internet: "));


console.log("")
console.log("Categorias cadastradas: ");

console.log(Object.keys(despesas)); //mostra as chaves do objeto despesa
console.log(Object.values(despesas)); //mostra os valores do objeto despesa

let valores = Object.values(despesas); //cria um acumulador que identifica os valores do objeto despesa 
let total = 0; //defini o valor do acumulador total para 0.

for (let indice = 0; indice < valores.length; indice++) { //cria um indice para que possa passar em cada valor do objeto despesa
    total = total + valores[indice]; //A cada volta, acessa uma nova posição do array e acumula o número na variável 'total'
}

console.log("");
console.log(`Total geral gasto no mês: ${total.toFixed(2)}`);