const centralAtendimento = {
    nome: "Central SC Express",
    atender: function(){
        console.log(`Atendimento inciado por: ${this.nome}`);
    }
}

const dispararAtendimento = centralAtendimento.atender;
dispararAtendimento();

const dispararAtendimentoSeguro = centralAtendimento.atender.bind(centralAtendimento);

dispararAtendimentoSeguro();