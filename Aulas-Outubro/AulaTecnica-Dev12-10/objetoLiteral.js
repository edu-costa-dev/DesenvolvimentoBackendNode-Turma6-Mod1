const conta = {
    titular: "Edu",
    saldo: 1500.00,
    depositar: function(valor){
        this.saldo += valor;
        console.log(`Novo saldo: R$${this.saldo}`);
    }
};

conta.depositar(500);

function Conta(titular, saldo){
    this.titular= titular;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
        console.log(`Novo saldo: R$${this.saldo}`);
    }
}

const contaVitor = new Conta(`Edu`,100)
conta.depositar(300)