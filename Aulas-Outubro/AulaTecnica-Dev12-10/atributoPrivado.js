class Carro{
    #modelo = `Carro Generico`;
    #velocidade = 0;
    constructor(modelo, velocidade){
        if(modelo){
            this.#modelo;
        }
        if(Number(velocidade)&& velocidade >0){
        this.#velocidade = velocidade;
        }
    }
    get  velocidade (){
        return `${this.#velocidade.toFixed(2)} Km/h`;
    }

    set velocidade(velocidade){
        if (isNaN(velocidade)){
            console.log(`Velocidade deve ser um número!`);
            return;
        }
        if(velocidade <0 || velocidade > 300){
            console.log(`Inválida!`);
            return;
        }
    }
}

const carroEdu = new Carro (`Peugeot`, 50)
console.log(carroEdu.velocidade)
carroEdu.velocidade = 70;
console.log(carroEdu.velocidade);
carroEdu.velocidade = 300;
console.log(carroEdu.velocidade);
