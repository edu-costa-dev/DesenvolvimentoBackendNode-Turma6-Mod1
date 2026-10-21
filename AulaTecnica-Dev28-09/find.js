// a função .find retorna o primeiro elemento do array que satisfaz a condição fornecida na função de callback. Se nenhum elemento atender à condição, ele retorna undefined.

const notas = [5.5, 7.0, 9.5, 4.0];

const notaAprovada = notas.find((nota) => nota >= 6.0);
console.log(notaAprovada); // Saída: 7.0


// o findindex retorna o índice do primeiro elemento do array que satisfaz a condição fornecida na função de callback. Se nenhum elemento atender à condição, ele retorna -1.
const notaAprovadaIndex = notas.findIndex((nota) => nota >= 6.0);
console.log(notaAprovadaIndex); // Saída: 1