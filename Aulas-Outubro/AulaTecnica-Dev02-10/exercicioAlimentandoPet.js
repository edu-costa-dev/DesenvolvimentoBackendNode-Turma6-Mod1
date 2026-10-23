const prompt = require("prompt-sync")();

function Pet (nome, fome) {
    this.nome = nome,
    this.fome = fome,
    this.alimentar = function(){
    this.fome -= 2;
    if (this.fome < 0) {
        this.fome = 0;
        }
    }
}


console.log("Alimentando o REX")
console.log("")

let nome = prompt("Digite o nome do Pet: ");
let fome = Number(prompt("Digite o nível de fome (0 a 10): "))

let meuPet = new Pet(nome, fome);

console.log("")
console.log(`Pet: ${meuPet.nome}`);
console.log(`Fome Atual; ${meuPet.fome}`)

meuPet.alimentar();

console.log(`Fome depois de alimentar: ${meuPet.fome}`);