const prompt = require('prompt-sync')();

console.log("Calculadora de Turno de Trabalho ================");

let manha = 8;
let tarde = 8;
let noite = 6;

console.log("Qual turno você trabalha?");
console.log("Digite 1 para Manhã.");
console.log("Digite 2 para Tarde.");
console.log("Digite 3 para Noite.");

let opcao = Number(prompt("Digite a opção desejada: "));
let cargaHoraria = 0;

switch (opcao) {
    case 1:
        console.log(`Você trabalha no turno da manhã, com carga horária de ${manha} horas.`);
        cargaHoraria = manha;
        break;

    case 2:
        console.log(`Você trabalha no turno da tarde, com carga horária de ${tarde} horas.`);
        cargaHoraria = tarde;
        break;

    case 3:
        console.log(`Você trabalha no turno da noite, com carga horária de ${noite} horas.`);
        cargaHoraria = noite;
        break;

    default:
        console.log("Opção inválida. Por favor, digite uma opção (1, 2 ou 3).");
}

console.log(`Recebe adicional noturno?  ${cargaHoraria === noite ? 'Sim' : 'Não'}`);
