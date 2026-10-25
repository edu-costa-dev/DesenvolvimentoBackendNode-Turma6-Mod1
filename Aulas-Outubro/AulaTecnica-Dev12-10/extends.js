class Funcionario {
    salarioBase = 0
    constructor(nome,salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase
    }

    calcularSalario(){
        return this.salarioBase;
    }
}

class Gerente extends Funcionario{
    constructor(nome, salarioBase, bonus){
        super(nome, salarioBase)
        this.bonus = bonus;
    }

    calcularSalario(){
        return this.salarioBase + this.bonus;
    }
}

const funcionario1 = new Funcionario(`Edu`, 1500);
console.log(funcionario1.calcularSalario())

const funcionario2 = new Gerente(`Vitor`, 1500, 300);
console.log(funcionario2.calcularSalario())