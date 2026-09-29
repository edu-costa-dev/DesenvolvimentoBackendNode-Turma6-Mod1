# Biblioteca **Math**

O `Math` é um objeto embutido no JavaScript que fornece constantes e métodos estáticos para cálculos matemáticos. Por ser estático, ele **não possui construtor** (não se usa `new Math()`).

### Principais Funções e Ações com seus exemplos e resultados: 

| Descrição | Exemplo de Código | Resultado |
| :--- | :---: | ---: |
| **`Math.PI`**: Proporção da circunferência de um círculo (~3.14159). | ```console.log(Math.pi)``` | 3.14159265... |
| **`Math.sqrt(x)`**: Calcula a raiz quadrada do número. | ```Math.sqrt(16)``` | 4 |
| **`Math.pow(base, exp)`**: Eleva a base ao expoente informado. | ```Math.pow``` | 8 |
| **`Math.abs(x)`**: Retorna o valor absoluto (sem sinal/positivo) do número. | ```Math.abs(-15)``` | 15 |
| **`Math.min(a, b, ...)`**: Retorna o menor número entre os valores passados. | ```Math.min(5, 2, 9)``` | 2 |
| **`Math.max(a, b, ...)`**: Retorna o maior número entre os valores passados. | ```Math.max(5, 2, 9)``` | 9 |
| **`Math.random()`**: Retorna um número pseudo-aleatório entre `0` (inclusivo) e `1` (exclusivo). | ```Math.random()``` | Ex: 0.7492 |

### Outros métodos:

| Descrição | Exemplo de Código | Resultado |
| :--- | :---: | ---: |
| **`Math.round(x)`**: Arredonda para o inteiro mais próximo. | `Math.round(4.6)` | `5` |
| **`Math.ceil(x)`**: Arredonda para cima (próximo inteiro maior ou igual). | `Math.ceil(4.1)` | `5` |
| **`Math.floor(x)`**: Arredonda para baixo (próximo inteiro menor ou igual). | `Math.floor(4.9)` | `4` |
| **`Math.trunc(x)`**: Remove a parte fracionária e mantém apenas a parte inteira. | `Math.trunc(4.9)` | `4` |
| **`Math.E`**: Constante de Euler e base dos logaritmos naturais (~2.718). | `console.log(Math.E)` | `2.71828182...` |

# Booleans

> O Boolean representa a lógica binária do computador, ou seja, um valor que pode ser verdadeiro (true) ou falso (false).

## Operadores de comparação: 

| Descrição | Exemplo | Resultado |
| :--- | :---: | ---: |
| ```==``` : igual à (compara apenas **valor**, faz coerção de tipo) | ```5=="5"``` | true |
| ```===``` : estritamente igual (compara valor e tipo) | ```5==="5"``` | false |
| ```!=``` : Diferente de (compara apenas valor) | ```5 != "5"``` | false |
| ```!==``` : Estritamente diferente (compara valor e tipo) | ```5!=="5"``` | true |
| ```>``` : maior que| ```10 > 5``` | true |
| ```<``` : menor que| ```3 < 2``` | false |
| ```>=``` : maior ou igual a| ```5 >= 5``` | true |
| ```<=``` : menor ou igual a| ```4 <= 3``` | false |