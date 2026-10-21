// A função reduce é usada para reduzir um array a um único valor, aplicando uma função a cada elemento do array original e acumulando o resultado.

const notas = [10, 8, 7];

const total = notas.reduce((acumulador, nota) => acumulador + nota, 0);

const media = total / notas.length;

console.log(`A média das notas é: ${media}`); // Saída: A média das notas é: 8.333333333333334