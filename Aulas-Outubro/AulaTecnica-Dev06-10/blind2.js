const prompt = require("prompt-sync")();


function registrarEntrega (cidade, pacotes){
    console.log(` ${this.nome} | ${this.categoria} realizou a entrega de ${pacotes} pacotes em ${cidade} `)
}

while (true){
    const nome = prompt("Informe o nome do entregador: ")
    const cidade = prompt(`Informe a cidade que o ${nome} realizou a entrega: `)
    const numEntrega = prompt(`Informe a quantidade de entregas que o ${nome} fez na cidade de ${cidade}: `);
    const motoristaExpress = {
        nome: nome,
        categoria: "Entregador VIP",
    };

    const registraEntregas = registrarEntrega.bind(motoristaExpress)
    registraEntregas(cidade,Number(numEntrega))
}