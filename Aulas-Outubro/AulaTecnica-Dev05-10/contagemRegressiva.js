const prompt = require("prompt-sync")();

function ContagemRegressiva (numero){
    if (numero <= 0) {
        console.log("Fim da contagem!");
        return;
    } 
    console.log(numero);
    ContagemRegressiva(numero -1);
}

ContagemRegressiva(10);