const listaProdutos = [
    {id: 1, nome: "Teclado", preco: 150},
    {id: 2, nome: "Mouse", preco: 80}
];

const jsonTexto = JSON.stringify(listaProdutos);
console.log(typeof jsonTexto); //exibe o tipo
console.log(jsonTexto); //exibi os valores

// convertendo para Array de volta

const dadosConvertido = JSON.parse(jsonTexto);
console.log(typeof dadosConvertido);
console.log(dadosConvertido[0].nome);
