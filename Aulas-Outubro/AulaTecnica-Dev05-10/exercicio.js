const prompt = require("prompt-sync")();

function ValidaSenha(tentativas){
    const codigo = prompt("Digite um código de acesso de 4 digitos: ");

    if (codigo.length == 4 && !isNaN(codigo)){
        console.log("Tem 4 digitos eé numero");
        console.log(codigo)
        return codigo;
    }
    console.log("ERRO: o codigo está errado");
    console.log(codigo)
    return ValidaSenha();
}

ValidaSenha();