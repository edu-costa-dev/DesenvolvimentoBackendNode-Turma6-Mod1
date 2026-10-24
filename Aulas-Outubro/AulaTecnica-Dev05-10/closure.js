function geradorEstoque (produto, estoqueInicial){
    let estoque = estoqueInicial;
    return function (quantidade){
        if (estoque <= 0){
            console.log(`Não tem mai estoque do ${produto}`);
            return;
        }
        estoque -= quantidade;
        console.log(`O produto ${produto} foi vendido. O estoque atual é: ${estoque}`)
    }
}

const venderBiscoito = geradorEstoque(`Biscoito`,10);
const venderBolacha = geradorEstoque(`Bolacha`, 5)

for (let indice = 0; indice < 12; indice++){
    venderBiscoito(1);
    venderBolacha(1);
}