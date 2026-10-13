const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número para ver a tabuada: '));

console.log(`---Tabuada do ${numero}---`);

console.log (`Tabuada no metodo for`);
for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
}

console.log (`Tabuada no metodo while`);
let contador = 1;
while (contador <= 10) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
}