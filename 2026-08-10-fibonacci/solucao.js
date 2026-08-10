function fibonacci(n){
    let vetor = []
    let n1 = 0
    let n2 = 1

    switch(n) {
        case 0:
            return vetor
        case 1:
            vetor.push(n1)
            return vetor
        default:
            vetor.push(n1)
            vetor.push(n2)
            for(let i = 0; i < (n - 2); i++){
                let soma = n1 + n2
                vetor.push(soma)
                n1 = n2
                n2 = soma
            }
            return vetor
    }

}

console.log(fibonacci(1));  
console.log(fibonacci(2));  
console.log(fibonacci(5));  
console.log(fibonacci(10)); 