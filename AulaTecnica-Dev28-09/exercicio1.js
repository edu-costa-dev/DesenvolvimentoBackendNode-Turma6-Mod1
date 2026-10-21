const prompt = require('prompt-sync')();

const salario = [];

for (let indice =0; indice < 3; indice++) {
    salario.push(Number(prompt(`Digite o salário ${indice + 1}: `)));
}

const aumentoSalario = salario.map(salario => parseInt(salario * 1.10));

const salarioReajustado = aumentoSalario.reduce((acumulador, salario) => acumulador + salario, 0);

console.log (`Salários com aumento de 10%: ${aumentoSalario}`);
console.log (`Salário reajustado: ${salarioReajustado}`);
