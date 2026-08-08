const numeros = [];


for (let numero = 1; numero <= 100; numero++) {
    let resultado = ""

    if (numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0) {
        resultado = "ZupKodTrix"
    } else if (numero % 3 === 0 && numero % 5 === 0) {
        resultado = "ZupKod"
    } else if (numero % 3 === 0) {
        resultado = "Zup"
    } else if (numero % 5 === 0) {
        resultado = "Kod"
    } else if (numero % 7 === 0) {
        resultado = "Trix"
    }

    if (resultado !== ""){
        numeros.push(resultado)
    }else{
        numeros.push(numero)
    }
    
}

for (let i = 0; i <= numeros.length; i++) {
    console.log(`\n${numeros[i]}`)
}