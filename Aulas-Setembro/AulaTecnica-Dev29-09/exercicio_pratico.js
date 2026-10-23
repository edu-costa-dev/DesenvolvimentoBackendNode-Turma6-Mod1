const prompt = require('prompt-sync')();

const funcionario = new Object();
funcionario.nome = prompt('Digite o nome do funcionário: ');
funcionario.cargo = prompt('Digite o cargo do funcionário: ');
funcionario.salario = parseFloat(prompt('Digite o salário do funcionário: '));
const aumento = salario => ((salario * 0.15) + salario);

console.log(`\nInformações do Funcionário:`);
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
console.log(`Salario + aumento de 15%: R$ ${aumento(funcionario.salario).toFixed(2)}`);


// outra forma de declarar o objeto

function carro (marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const meuCarro = new carro('Toyota', 'Corolla', 2020);
const outroCarro = new carro('Honda', 'Civic', 2021);

console.log(`\nInformações do Carro:`);
console.log(meuCarro);
console.log(outroCarro);
