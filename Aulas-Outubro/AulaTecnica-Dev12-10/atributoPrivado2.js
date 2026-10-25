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

    acelerar(kmh){
        const velFinal = this.#velocidade + kmh;
        if(velFinal>300){
            console.log(`Valor inválido, voce excedeu o limite de velocidade.`);
            return;
        }
        this.#velocidade = velFinal;
    }

    frear(kmh){
        const velFinal = this.#velocidade + kmh;
        if(velFinal<0){
            console.log(`Valor inválido, voce execedeu a velocidade minima.`);
            return;
        }
        this.#velocidade = velFinal;
    }
}

const carroEdu = new Carro (`Peugeot`, 50)
console.log(carroEdu.velocidade);
carroEdu.acelerar(30);
console.log(carroEdu.velocidade);
carroEdu.frear(80);
console.log(carroEdu.velocidade);

