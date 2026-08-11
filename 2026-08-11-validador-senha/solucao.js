function validarSenha(senha){

    const erros = []

    if(senha.length < 8){
       erros.push("Não contém o mínimo de 8 caracteres.")
    }
    
    if (/[A-Z]/.test(senha) == false){
        erros.push("Não contém letra maiúscula.")
    }

    if (/[a-z]/.test(senha) == false){
        erros.push("Não contém letra minúscula.")
    }
   
    if (/[0-9]/.test(senha) == false){
        erros.push("Não contém números.")
    }

    if (/[!@#$%^&*]/.test(senha) == false){
        erros.push("Não contém caracteres especiais")
    }

    return {
        valida: erros.length == 0,
        erros: erros
    }
}


console.log(validarSenha("abc123"));
console.log(validarSenha("Senha@Forte123"));