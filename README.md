# 📘 Atividade 4 - Algoritmos Fundamentais com Testes Unitários

Este projeto implementa diversos algoritmos fundamentais em JavaScript e aplica testes unitários utilizando a biblioteca **Jest**.

## ✨ Tecnologias Utilizadas

- JavaScript (Node.js)
- Jest (para testes)

## 📁 Estrutura

├── src/
│ ├── functions/
│ │ ├── fibonacci.js
│ │ ├── mdc.js
│ │ ├── quicksort.js
│ │ ├── contagem.js
│ │ ├── somatorio.js
│ │ ├── numeroprimo.js
│ │ └── allFunctions.test.js
│
├── package.json
├── package-lock.json
└── README.md

shell
Copiar
Editar

## ▶️ Como Executar

### 1. Instale as dependências

```bash
npm install

2. Execute os testes
bash
Copiar
Editar
npm test
Você verá a seguinte saída se tudo estiver correto:

yaml
Copiar
Editar
PASS src/functions/allFunctions.test.js
✓ fibonacciFunc 5 = [0,1,1,2,3]
✓ primeFunc 10 = false
...
Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
🧪 Testes incluídos
Fibonacci

Números Primos

Máximo Divisor Comum (MDC)

Contagem

Somatório

QuickSort
