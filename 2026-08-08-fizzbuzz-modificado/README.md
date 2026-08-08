# Desafio 01 — FizzBuzz Modificado

📅 **Data:** 08/08/2026
🏷️ **Nível:** Iniciante
🛠️ **Linguagem:** JavaScript

## 📋 Enunciado

Escreva um programa que percorra os números de **1 até 100** e, para cada número:

- Se for divisível por **3**, imprima **"Zup"**
- Se for divisível por **5**, imprima **"Kod"**
- Se for divisível por **3 e por 5** ao mesmo tempo, imprima **"ZupKod"**
- Se não for divisível por nenhum dos dois, imprima o **próprio número**

### 🌟 Desafio extra

Modifique o programa para que ele também funcione com números divisíveis por **7**, imprimindo **"Trix"**. Combine os casos (ex: um número divisível por 3, 5 e 7 ao mesmo tempo deve imprimir **"ZupKodTrix"**).

## 💡 Exemplo de saída esperada (primeiros números)

```
1
2
Zup
4
Kod
Zup
...
ZupKod   (número 15)
```

## ✅ Critérios de aceite

- O programa deve rodar do 1 ao 100 sem intervenção manual
- A ordem das palavras na combinação deve seguir: `Zup` → `Kod` → `Trix`
- Nenhuma dependência externa é necessária

## ▶️ Como rodar

```bash
node solucao.js
```

## 🧠 Dica

Pense em cada regra de forma independente (usando `%`) e vá concatenando o resultado numa string. Só imprima o número original se a string ficar vazia no final.