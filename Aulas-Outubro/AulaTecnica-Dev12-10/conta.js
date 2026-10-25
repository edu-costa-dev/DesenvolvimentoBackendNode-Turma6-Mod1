class Conta{
    #extrato = []
    tipoConta = `Salário`

    constructor(titular, saldo){
        this.titular= titular;
        this.saldo = saldo;
    }
    depositar = function (valor) {
        this.saldo += valor;
        console.log(`Conta: ${this.titular}. Novo saldo: R$${this.saldo}`);
    }
    exibirExtrato(){
        console.log(`Seu saldo é: ${this.saldo.toFixed(2)}`);
    }
}


const contaVitor = new Conta(`Vitor`,100);
contaVitor.depositar(300);
console.log(`Tipo da Conta: `,contaVitor.tipoConta);
const contaEdu = new Conta(`Edu`,100);
contaEdu.depositar(300);
console.log(`Tipo da Conta: `,contaEdu.tipoConta);

console.log(exibirExtrato)