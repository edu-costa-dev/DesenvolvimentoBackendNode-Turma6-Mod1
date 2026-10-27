# Desenvolvimento Backend Node.js - Turma 6 - Módulo 1

Este repositório reúne os exercícios, atividades práticas e materiais de aula do módulo de Desenvolvimento Backend com Node.js da turma 6.

## Objetivo do projeto

O projeto foi criado para praticar conceitos fundamentais de JavaScript e TypeScript, incluindo:

- variáveis, estruturas condicionais e loops
- arrays, objetos e JSON
- funções e Higher Order Functions
- closures, this, bind, call e apply
- orientação a objetos e classes
- TypeScript e tipagem
- consumo de APIs e manipulação de dados
- lógica de programação aplicada a exercícios do dia a dia

## Estrutura do repositório

- `Aulas-Setembro/` — atividades e materiais das aulas de setembro
- `Aulas-Outubro/` — atividades e materiais das aulas de outubro
- `package.json` — configuração do projeto e dependências
- `tsconfig.json` — configuração do compilador TypeScript

## Requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Node.js 18 ou superior
- npm (geralmente incluído com o Node.js)
- Git

## Instalação das dependências

Na raiz do projeto, execute:

```bash
npm install
```

Esse comando instala todas as dependências listadas no arquivo `package.json`, incluindo:

- `prompt-sync`
- `typescript`
- `@types/node`
- `@types/prompt-sync`

Se quiser instalar manualmente, também pode usar:

```bash
npm install prompt-sync typescript @types/node @types/prompt-sync
```

## Como rodar as atividades

Após instalar as dependências, execute os arquivos JavaScript diretamente com o Node.js.

Exemplo:

```bash
node Aulas-Outubro/AulaTecnica-Dev26-10/consultaCEP.js
```

Para arquivos TypeScript, primeiro compile com o TypeScript:

```bash
npx tsc
```

Se quiser verificar a compilação sem gerar arquivos, pode usar:

```bash
npx tsc --noEmit
```

## Exemplos de execução

Algumas atividades podem ser iniciadas assim:

```bash
node Aulas-Setembro/AulaTecnica-Dev22-09/calculadora.js
node Aulas-Outubro/AulaTecnica-Dev05-10/contagemRegressiva.js
```

## Dicas

- Use o terminal na raiz do projeto para evitar caminhos relativos quebrados.
- Para atividades interativas, confira se o script usa `prompt-sync` ou entrada do terminal.
- Caso tenha dúvidas sobre algum exercício, consulte os arquivos `.md` das aulas e os scripts da mesma pasta.

## Autor/Curso

Projeto desenvolvido como parte do curso de Desenvolvimento Backend com Node.js, com foco em exercícios práticos e estudos de lógica de programação.
