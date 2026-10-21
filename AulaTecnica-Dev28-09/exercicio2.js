const prompt = require('prompt-sync')();

const nota = [];

for (let indice = 0; indice < 4; indice++) {
    const notaAluno = parseFloat(prompt(`Digite a nota do aluno ${indice + 1}: `));
    nota.push(notaAluno);
}

const recuperacao = nota.filter(notaAluno => notaAluno < 6);
const passouDireto = nota.every(notaAluno => notaAluno >= 6);

if (passouDireto) {
    console.log(`Parabéns, Você passou direto!`);
} else {
    console.log(`Você não passou direto, suas notas de recuperação são: ${recuperacao.join(', ')}`);
}
