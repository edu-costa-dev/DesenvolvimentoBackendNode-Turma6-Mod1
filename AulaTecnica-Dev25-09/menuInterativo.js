const prompt = require('prompt-sync')();

console.log('---Menu Interativo---');
console.log('1 - Consultar Saldo');
console.log('2 - Depositar');
console.log('0 - Sair');

let opcao = Number(prompt('Escolha uma opção: '));
let saldo = 1000.00;

while (opcao !== 0) {
    switch (opcao) {
        case 1:
            console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
            break;
        case 2:
            console.log("Digite o valor a ser depositado: ");
            let valorDeposito = Number(prompt());
            saldo += valorDeposito;
            console.log(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso!`);
            console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
            break;
        case 0:
            console.log('Saindo do menu...');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
    }
}
