// a função every verifica se todos os elementos do array satisfazem a condição fornecida na função de callback. Retorna true se todos os elementos atenderem à condição, caso contrário, retorna false.

const notas = [5.5, 7.0, 9.5, 4.0];

const todasNotasAprovadas = notas.every(nota => nota >= 4);
console.log(todasNotasAprovadas); // Saída: true

//caso alguma nota seja menor que 6, o resultado será false
todasNotasAprovadas = notas.every(nota => nota >= 6);
console.log(todasNotasAprovadas); // Saída: false