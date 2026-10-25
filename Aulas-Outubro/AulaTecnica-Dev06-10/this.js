const motorista01 = {
    nome: "Carlos",
    veiculo: "Caminhão Padrão"
}

function exibirVeiculos(){
    console.log(`Motorista: ${this.nome} | Veículo: ${this.veiculo}`);
}

exibirVeiculos.call(motorista01);