## JavaScript no Backend?

Quando o JavaScript foi criado, ele rodava exclusivamente dentro dos navegadores, servindo basicamente para dar dinamismo às páginas e interagir com elementos visuais da interface.

Esse cenário mudou radicalmente quando [**Ryan Dahl**](https://en.wikipedia.org/wiki/Ryan_Dahl) isolou o [**motor V8**](https://v8.dev/docs) — o motor de execução do Google Chrome — e o integrou a um ambiente autônomo desenvolvido em [**C++**](https://pt.cppreference.com/). Essa combinação deu origem ao [**Node.js**](https://nodejs.org/pt-br/about), que se consolidou como o padrão de mercado: maduro, amplamente adotado, permissivo por padrão no acesso ao sistema, mas dependente de ferramentas externas para rodar [**TypeScript**](https://www.typescriptlang.org/) e lidar com dependências pesadas (`node_modules`).

Anos depois, o próprio Ryan Dahl desenvolveu o [**Deno**](https://docs.deno.com/runtime/) (escrito em [**Rust**](https://rust-lang.org/pt-BR/learn/) e C++) para resolver falhas arquiteturais do Node.js. Esses pontos críticos foram detalhados por Dahl na conferência JSConf EU 2018, durante a palestra *"10 Things I Regret About Node.js"* ("10 coisas das quais me arrependo no Node.js"):

* **Seguro por padrão:** o acesso a arquivos, rede e variáveis de ambiente requer permissão explícita.
* **TypeScript nativo:** suporte integrado pronto para uso, sem necessidade de compiladores ou loaders adicionais.
* **Sem pastas de dependências locais:** dispensa diretórios pesados como `node_modules` no projeto raiz.

Em suma: enquanto o Node.js prioriza a compatibilidade e a estabilidade de um ecossistema consolidado, o Deno foca em segurança integrada, modernidade e produtividade imediata.


## Compilação vs. Execução

* **Linguagens compiladas**: traduzem seu código para um arquivo executável (tipo um ".exe") antes de inicializar.

* **Linguagens  interpretadas**: são mais antigas (como o primeiro JS), o compilador lê e executa o código linha por linha, e durante a execução. Isso deixava mais lento. 

* O grande segredo do Node.JS ser um "monstro" de velocidade é o compilador [**JIT (Just-In-Time)**](https://pt.wikipedia.org/wiki/JIT), onde ele junta o melhor dos dois mundos! 

## Vantagens de utilizar o Node.JS

> ### Uma linguagem , dois mundos.
> Reutiliza a linguagem para Frontend, aproveitando para o Backend.
> 
> ### Entrada/Saída não é bloqueante.
> Permite aguentar muitas conexões/chamadas simultâneas. 
>
> ### NPM
> Mais de 2 milhões de pacote que ajudam no desenvolvimento.

## Ferramentas para desenvolver as atividades da aula. 

[**Prompt-Sync**](https://www.npmjs.com/package/prompt-sync) é um pacote que permite ler dados digitados pelo usuário no terminal de forma sincrona, simluando a função ```prompt()``` do navegador. Intale-o antes de executar as atividades deste curso. 

```
npm install prompt-sync
```
