const prompt = require('prompt-sync')();

function Funcionario (nome, cargo, salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.calcularReajuste = function(porcentagemReajuste) {
        salario += salario * (0.01 * porcentagemReajuste);
    }
}

const funcionarios = [];

for (let indice = 0; indice < 2; indice++) {
    const nome = prompt('Digite o nome do funcionário: ');
    const cargo = prompt('Digite o cargo do funcionário: ');
    const salario = parseFloat(prompt('Digite o salário do funcionário: '));
    const funcionario = new Funcionario(nome, cargo, salario);
    funcionarios.push(funcionario);
}

funcionarios[0].calcularReajuste(10);
funcionarios[1].calcularReajuste(10);

console.log(funcionarios[0]);
console.log(funcionarios[1]);