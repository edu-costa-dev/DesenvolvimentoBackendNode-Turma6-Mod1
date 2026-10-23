const prompt = require('prompt-sync')();

function SistemaBiblioteca (titulo, autor) {
    this.titulo = titulo;  
    this.autor = autor;
}

function Aluno (nome) {
    this.nome = nome;
    this.livrosEmprestados = null;
}

Aluno.prototype.emprestarLivro = function (livro) {
    if (this.livrosEmprestados !== null) {
        console.log(`O aluno ${this.nome} já possui um livro emprestado.`);
    } else {
        this.livrosEmprestados = livro;
        console.log(`O aluno ${this.nome} emprestou o livro "${livro.titulo}" de ${livro.autor}. Armazenado com sucesso!`);
    }
}

Aluno.prototype.devolverLivro = function () {
    if (this.livrosEmprestados !== null) {
        console.log(`O aluno ${this.nome} devolveu o livro "${this.livrosEmprestados.titulo}" de ${this.livrosEmprestados.autor}.`);
        this.livrosEmprestados = null;
    } else {
        console.log(`O aluno ${this.nome} não possui nenhum livro emprestado.`);
    }
}

Aluno.prototype.exibirStatus = function () {
    if (this.livrosEmprestados !== null) {
        console.log(`O aluno ${this.nome} possui o livro "${this.livrosEmprestados.titulo}" de ${this.livrosEmprestados.autor} emprestado.`);
    } else {
        console.log(`O aluno ${this.nome} não possui nenhum livro emprestado.`);
    }
}

console.log("Bem-vindo ao Sistema de Biblioteca! || ---- Cadastro ----");
const nomeAluno = prompt("Digite o nome do aluno: ");
const aluno1 = new Aluno(nomeAluno);

const titulo1 = prompt("Digite o título do livro: ");
const autor1 = prompt("Digite o autor do livro: ");
const livro1 = new SistemaBiblioteca(titulo1, autor1);

const titulo2 = prompt("Digite o título do livro: ");
const autor2 = prompt("Digite o autor do livro: ");
const livro2 = new SistemaBiblioteca(titulo2, autor2);

console.log("\nSimulação do fluxo.");

console.log("\nTentando pegar o primeiro livro emprestado:");
aluno1.emprestarLivro(livro1);
aluno1.exibirStatus();

console.log("\nTentando pegar o segundo livro emprestado:");
aluno1.emprestarLivro(livro2);

console.log("\nDevolvendo o livro atual:");
aluno1.devolverLivro();
aluno1.exibirStatus();

console.log("\nPegando o novo livro apos devolução:");
aluno1.emprestarLivro(livro2);
aluno1.exibirStatus();