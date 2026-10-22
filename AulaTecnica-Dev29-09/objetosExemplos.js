function pessoa (nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}


function carro (marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
}

function motor (nome, cilindros, cilindrada) {}

/* const nome = prompt('Digite o nome da pessoa: ');
const idade = parseInt(prompt('Digite a idade da pessoa: '));
const sexo = prompt('Digite o sexo da pessoa (M/F): '); */

const dono = new pessoa("Eduardo", 30, "M");
const meuCarro = new carro('Toyota', 'Corolla', 2020, dono);
const outroCarro = new carro('Honda', 'Civic', 2021, dono);

