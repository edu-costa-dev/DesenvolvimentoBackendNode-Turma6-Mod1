function processarPreco (valor, acao){
    return acao(valor);
}

const comDesconto10 = (preco) => preco * 0.9;
const comAcrescimo5 = (preco) => preco * 1.05;

let precoBase = 100
console.log("Com desconto: ", processarPreco(precoBase, comDesconto10));
console.log("Com acrescimo: ", processarPreco(precoBase, comAcrescimo5));