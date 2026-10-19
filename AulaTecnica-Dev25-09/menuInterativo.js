const prompt = require('prompt-sync')();

let saldo = 1000.00;
let opcao;

do {
    console.log('\n--- Menu Interativo ---');
    console.log('1 - Consultar Saldo');
    console.log('2 - Depositar');
    console.log('0 - Sair');

    opcao = Number(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            console.log(`Seu saldo atual e: R$ ${saldo}`);
            break;
        case 2:
            let valorDeposito = Number(prompt('Digite o valor a ser depositado: '));
            saldo += valorDeposito;
            console.log(`Depósito realizado! Saldo atual: R$ ${saldo}`);
            break;
        case 0:
            console.log('Sessão encerrada. Obrigado!');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
    }
} while (opcao !== 0);