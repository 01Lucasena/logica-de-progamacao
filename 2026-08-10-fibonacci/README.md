# Desafio 03 — Fibonacci

📅 **Data:** 10/08/2026
🏷️ **Nível:** Iniciante/Intermediário
🛠️ **Linguagem:** JavaScript

## 📋 Enunciado

Escreva uma função que recebe um número `n` e retorna os **primeiros `n` números** da sequência de Fibonacci.

### Regras

- A sequência começa com `0` e `1`
- Cada número seguinte é a soma dos dois anteriores: `0, 1, 1, 2, 3, 5, 8, 13, 21...`
- Se `n` for `0`, retorne um array vazio
- Se `n` for `1`, retorne `[0]`

## 💡 Exemplos

```javascript
fibonacci(1);  // [0]
fibonacci(2);  // [0, 1]
fibonacci(5);  // [0, 1, 1, 2, 3]
fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## 🌟 Desafio extra

Depois de resolver com um loop (iterativo), tente resolver a mesma lógica usando **recursão** — e pense sobre por que a versão recursiva "pura" fica bem mais lenta pra números grandes (dica: pesquise sobre *memoização*, se quiser ir além).

## ✅ Critérios de aceite

- Deve retornar um array com exatamente `n` elementos
- Deve tratar corretamente os casos `n = 0` e `n = 1`
- A sequência deve seguir a regra: soma dos dois números anteriores

## ▶️ Como rodar

```bash
node solucao.js
```

## 🧠 Dica

Comece guardando os dois primeiros valores da sequência em variáveis separadas. A cada volta do loop, calcule o próximo valor somando os dois anteriores, guarde no array e "avance" essas variáveis para a próxima soma.