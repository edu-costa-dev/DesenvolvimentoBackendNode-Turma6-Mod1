function funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

funcionario.prototype.aumentarSalario = function (percentual) {
    const aumento =this.salario * (percentual / 100);
    this.salario += aumento;
};

const funcionario1 = new funcionario("Ana", "Analista", 5000);
const funcionario2 = new funcionario("Ana", "Analista", 5000);
const funcionario3 = new funcionario("Edu", "Desenvolvedor", 4000);

const jsonFuncionario1 = JSON.stringify(funcionario1);
const jsonFuncionario2 = JSON.stringify(funcionario2);
const  jsonFuncionario3 = JSON.stringify(funcionario3);

const comparacao1 = jsonFuncionario1 === jsonFuncionario2;
console.log(`Comparando funcionário 1 e funcionário 2: [${comparacao1}]`); // true
const comparacao2 = jsonFuncionario1 === jsonFuncionario3;
console.log(`Comparando funcionário 1 e funcionário 3: [${comparacao2}]`); // false
const comparacao3 = jsonFuncionario2 === jsonFuncionario3;
console.log(`Comparando funcionário 2 e funcionário 3: [${comparacao3}]`); // false