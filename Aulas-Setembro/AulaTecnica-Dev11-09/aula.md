# Documentação das principais tecnologias.

## 📖 Glossário da aula
* GUI - Interface Grática do Usuário (Graphical User Interface)

| Tecnologias de Front-end | Tecnologias de Back-end |
| :--- | ---: |
| [MDN HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) | [Django Docs](https://docs.djangoproject.com/) |
| [MDN CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) | [Node.js Docs](https://nodejs.org/en/docs/) |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | [PHP Docs](https://www.php.net/docs.php) |
| [React Docs](https://react.dev/) | [.NET Docs](https://learn.microsoft.com/pt-br/dotnet/) |
| [Angular Docs](https://angular.dev/) | [Spring Boot Docs](https://spring.io/projects/spring-boot) |

## Como o backend é presente no nosso dia-à-dia? 
* O *backend* é a **estrutura invisível** ("por trás dos panos") que faz toda a tecnologia moderna funcionar. Enquanto o *frontend* é a **interface com a qual você interage** (telas, botões, cores), o backend processa os dados, garante a segurança, executa as regras de negócio e integra sistemas.

Aqui estão algumas das maneiras mais comuns em que o backend está diretamente presente na sua rotina diária:

### 1. Aplicativos de Bancos e Pagamentos
* **Regras de Negócio e Saldo:** Quando você transfere um Pix, o backend valida se você tem saldo suficiente, subtrai a quantia da sua conta, adiciona na conta de destino e notifica os dois bancos em milissegundos.
* **Segurança e Fraude:** Analisa seu padrão de uso para identificar tentativas de golpe ou transações suspeitas antes mesmo de aprovar a compra.

### 2. Redes sociais
* **Algoritmos de Recomendação:** O backend analisa o que você curte, quanto tempo passa em cada vídeo e suas interações para selecionar exatamente o que exibir a seguir.
* **Armazenamento e Entrega de Mídia:** Salva fotos e vídeos em servidores na nuvem (como AWS ou Google Cloud) e entrega o conteúdo otimizado para a velocidade da sua internet.

### 3. Redes de Streaming
* **Transmissão Adaptativa:** O backend ajusta a qualidade do vídeo ou áudio em tempo real de acordo com a estabilidade da sua conexão para evitar travamentos.

* **Gerenciamento de Perfis:** Lembra em qual minuto exato você parou de assistir a um filme no celular para que você continue da TV.

### 4. Aplicativos de Transporte e Delivery
* **Cálculo de Rotas e Preços:** Utiliza algoritmos para encontrar o motorista ou entregador mais próximo, calcular o tempo estimado de chegada (ETA) e definir o preço dinâmico com base na oferta e demanda.

* **Comunicação em Tempo Real:** Mantém o rastreamento via GPS atualizado em tempo real entre o cliente, o prestador de serviço e o estabelecimento.

### 5. E-commerce e Compras Online
* **Controle de Estoque:** Impede que duas pessoas comprem o mesmo último produto em estoque ao mesmo tempo.

* **Integração de Frete:** Conecta-se às APIs das transportadoras e dos Correios para calcular o valor do frete e o prazo de entrega com base no seu CEP.

### 6. Autenticação e Login
* **Criptografia de Senhas:** Nenhuma empresa séria guarda sua senha em texto puro. O backend converte sua senha em um código criptografado (hash) para validar seu acesso sem expor seus dados.

* **Sessões e Tokens:** Mantém você conectado aos seus aplicativos sem exigir que você digite usuário e senha a cada clique.

## Ferramentas a serem utilizadas:

[Github](https://github.com/?locale=pt-br): Versionamento de código. 

[VS Code](https://code.visualstudio.com/): Editor de Codigo.

[Cat Fact API](https://catfact.ninja/): Para consumir/testar a API.