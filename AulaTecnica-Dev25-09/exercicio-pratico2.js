const prompt = require('prompt-sync')();

const precoDesconto = Number(prompt("Digite o preço do produto: "));

const calculoDesconto = valor => {
    return valor - (valor * 0.10);
}

console.log(`O preço do produto com desconto é: R$ ${calculoDesconto(precoDesconto)}`);