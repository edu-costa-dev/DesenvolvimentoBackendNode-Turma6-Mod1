
function* fluxoEntrega(){
    yield "Passo 1]- Pacote recebido no centro de distribuição... AGUARDANDO PROXIMA ETAPA..."
    yield "Passo 2]- Pacote em transito para cidade de destino... AGUARDE PROXIMA ETAPA..."
    yield "Passo 3]- Saiu para entrega para destinatário... AGUARDE CHEAGA..."
    return "Passo 4]- Entregue com sucesso... FIM DE PROCESSO..."
}

const rastreio = fluxoEntrega();

console.log(rastreio.next().value);
console.log(rastreio.next().value);
console.log(rastreio.next().value);
console.log(rastreio.next().value);