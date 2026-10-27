const prompt = require('prompt-sync')();

async function buscarCEP() {
  const cep = prompt("Digite o CEP sem caracteres especiais: ");

  try {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao consultar o CEP");
    }

    const dados = await resposta.json();

    if (dados.erro) {
      console.log("CEP não encontrado!");
      return;
    }

    console.log("CEP:", dados);

  } catch (erro) {
    console.error("Erro na consulta:", erro.message);
  }
}

buscarCEP();