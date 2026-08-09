# Desafio 02 — Validador de Palíndromo

📅 **Data:** 09/08/2026
🏷️ **Nível:** Iniciante/Intermediário
🛠️ **Linguagem:** JavaScript

## 📋 Enunciado

Escreva uma função que recebe uma string e retorna `true` se ela for um **palíndromo** (lê-se igual de trás pra frente) ou `false` caso contrário.

### Regras

- Ignore espaços, pontuação e acentuação
- Ignore diferenças entre maiúsculas e minúsculas

## 💡 Exemplos

```javascript
ehPalindromo("arara");                                    // true
ehPalindromo("A sacada da casa");                             // true (ignorando espaços e caixa)
ehPalindromo("javascript");                                 // false
ehPalindromo("Socorram-me, subi no ônibus em Marrocos");   // true
```

## 🌟 Desafio extra

Depois de resolver com um loop ou comparação manual, tente resolver usando métodos de array/string do JavaScript (`split`, `reverse`, `join`) — e compare as duas abordagens.

## ✅ Critérios de aceite

- A função deve ignorar espaços, pontuação e acentuação
- A função deve ser case-insensitive
- Deve retornar um valor booleano (`true` ou `false`)

## ▶️ Como rodar

```bash
node solucao.js
```

## 🧠 Dica

Pense em como "limpar" a string antes de comparar: remova tudo que não for letra/número e converta tudo para minúsculas. Só depois disso, compare a string original (limpa) com sua versão invertida.