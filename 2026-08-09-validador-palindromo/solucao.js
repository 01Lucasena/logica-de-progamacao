function ehPalindromo(texto){
    let string = texto.normalize('NFD').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let stringInvertida = string.split('').reverse().join('');

    if(string === stringInvertida){
        return true
    }else{
        return false
    }
}

console.log(ehPalindromo("arara"))
console.log(ehPalindromo("javascript"))
console.log(ehPalindromo("A sacada da casa"))
console.log(ehPalindromo("Socorram-me, subi no ônibus em Marrocos"))