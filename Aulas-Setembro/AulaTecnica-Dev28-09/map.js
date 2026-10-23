// a função map é utilizada para criar um novo array a partir de um array existente, aplicando uma função a cada elemento do array original e retornando o resultado em um novo array. 

const valores = [100, 200, 300, 400, 500];

const calculoImposto = valores.map((valor) => valor * 1.10);
console.log(calculoImposto);

// exemplo de uso do map para calcular imposto de 10% para valores maiores que 200:

const imposto = valores.map((valor) => {
    return valor > 200 ?
        parseInt(valor * 1.10) 
        :
        valor;
});
console.log(imposto); // Saída: [100, 200, 330, 440, 550]