# Desafio 04 — Validador de Senha

📅 **Data:** 11/08/2026
🏷️ **Nível:** Intermediário
🛠️ **Linguagem:** JavaScript

## 📋 Enunciado

Escreva uma função que recebe uma senha (string) e retorna se ela é **forte** ou **fraca**, verificando as seguintes regras:

- Deve ter **no mínimo 8 caracteres**
- Deve conter **pelo menos 1 letra maiúscula**
- Deve conter **pelo menos 1 letra minúscula**
- Deve conter **pelo menos 1 número**
- Deve conter **pelo menos 1 caractere especial** (ex: `!@#$%^&*`)

A função deve retornar um objeto explicando o que passou e o que falhou.

## 💡 Exemplos

```javascript
validarSenha("abc123");
// {
//   valida: false,
//   erros: ["Mínimo de 8 caracteres", "Falta letra maiúscula", "Falta caractere especial"]
// }

validarSenha("Senha@Forte123");
// {
//   valida: true,
//   erros: []
// }
```

## 🌟 Desafio extra

Ao invés de só dizer "válida ou não", calcule um **nível de força** (ex: fraca / média / forte) baseado em quantas regras foram atendidas.

## ✅ Critérios de aceite

- Deve retornar um objeto com as chaves `valida` (booleano) e `erros` (array de strings)
- Cada regra não atendida deve gerar uma mensagem de erro específica no array
- Se todas as regras forem atendidas, `erros` deve ser um array vazio e `valida` deve ser `true`

## ▶️ Como rodar

```bash
node solucao.js
```

## 🧠 Dica

Expressões regulares ajudam bastante aqui. Por exemplo, `/[A-Z]/.test(senha)` retorna `true` se a string tiver pelo menos uma letra maiúscula. Pense em uma regex parecida para minúsculas, números e caracteres especiais.