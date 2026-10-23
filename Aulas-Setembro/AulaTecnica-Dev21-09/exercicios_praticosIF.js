const prompt = require('prompt-sync')();

let valorCompra = Number(prompt('Digite o valor da compra: '));

if (valorCompra >=100){
    console.log(`O valor da compra é R$ ${valorCompra.toFixed(2)} e você ganhou um desconto de R$ 20,00! Total da compra é: R$ ${(valorCompra - 20).toFixed(2)}`);
} else {
    console.log(`O valor da compra é R$ ${valorCompra.toFixed(2)} e você não ganhou desconto! Total da compra é: R$ ${valorCompra.toFixed(2)}`);
}