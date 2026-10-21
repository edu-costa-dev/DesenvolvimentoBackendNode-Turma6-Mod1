// a função forEach() é um método de array em JavaScript que executa uma função fornecida uma vez para cada elemento do array. Ele não retorna um novo array, mas sim undefined. É comumente usado para iterar sobre os elementos de um array e realizar operações em cada elemento.

const notas = [5.5, 7.0, 9.5, 4.0];

const notasComAcrescimo = notas.forEach((item) => {
    console.log(`Sua nota é: ${item}`);
    return item;
})