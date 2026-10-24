const prompt = require("prompt-sync")();

function geradorCodRastreio (valorInicial, prefixo){
    let valorIni = valorInicial;
    return function(){
        valorIni++;
        return `${prefixo}-${String(valorIni).padStart(4,"0")}`;
    }
}

const prefix = prompt("Digite o prefixo que você deseja para o código: ");
const ultimoPedido = Number(prompt("Digite o numero da ultima encomenda: "));

const gerarPedidos = geradorCodRastreio(ultimoPedido, prefix);
console.log(`Gerador Criado`);

const qtdEncomendas = Number(prompt(`Digite a quantidade de encomendas que voce deseja realizar: `))

for (let indice = 0; indice < qtdEncomendas; indice++){
    const codRastreio = gerarPedidos();
    console.log(`a entrega número ${indice}, foi despachado com o cod: ${codRastreio}.`);
}