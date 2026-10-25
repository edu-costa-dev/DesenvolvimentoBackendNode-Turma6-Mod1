const prompt = require("prompt-sync")();
console.log ("'==== Inicializando Módulos do Sustema ==='");

(function (){

    let contador = 100;
    console.log(`[Metricas] Sistema iniciado com ${contador} acessos registrados.`)
})();


let contador = Number(prompt("Quantos itens o cliente adicionou no carrinho: "))
console.log(`\n[Carrinho] Itens no carrinho atual: ${contador}`)
console.log("Módulos executados com sucesso e sem conflito de variáveis!")
