const objA = {nome: "Ana", saldo: 500};
const objB = {nome: "Ana", saldo: 500};
console.log(objA === objB); // false
const saoIguais = JSON.stringify(objA) === JSON.stringify(objB);
console.log(saoIguais);