const prompt = require("prompt-sync")();

const Taxa_base = 15;
const custo = 1.5;

function lerDistanciaValida(){
    const distancia = Number(prompt("Digite a distancia: "));
    const distanciaETambemValido = distancia > 0 && distancia < 10000;
    const distanciaENumero = Boolean(distancia);
    if(distanciaETambemValido && distanciaENumero){
        return distancia;
    }
    console.log(`Distancia tem que ser maior que 0 e menos de 10.000.`);
    lerDistanciaValida();
}

function gerarCodigoRastreio(prefixo="SCT"){
    let sequencial = 0;
    return function(){
        sequencial++
        return `${prefixo}-${String(sequencial).padStart(3, "0")}`
    }
}

function impressaoCentral (imprime){
    return imprime();
}

function Encomenda(codigo, cliente, cidade, distancia){
    this.codigo = codigo;
    this.cliente = cliente;
    this.cidade = cidade;
    this.distancia = distancia;
    this.status = 'Pendente';
    this.calculaFrete = function(){
        const frete = Taxa_base + (this.distancia*custo);
        return frete;
    }
    this.gerarComprovante = function(){
        console.log(`'====' Comprovante '===='`);
        console.log(`Código: ${this.codigo}`);
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Cidade: ${this.cidade}`);
        console.log(`Distancia: ${this.distancia}`);
        console.log(`Status: ${this.status}`);
        console.log(`Frente: ${this.calculaFrete()}`)
    }
}

const geradorDeCodigoSC = gerarCodigoRastreio();
const codigo = geradorDeCodigoSC();
const cliente = prompt(`Digite o nome do cliente: `);
const cidade = prompt(`Digite o nome da cidade: `);
const distancia = lerDistanciaValida();

const encomenda1 = new Encomenda(codigo,cliente,cidade,distancia);
const funcaoImprimirEncomenda = encomenda1.gerarComprovante.bind(encomenda1)
impressaoCentral(funcaoImprimirEncomenda);

