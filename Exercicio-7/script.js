function entrar(){
    const senha = 123456
    const saldo = 1000
    var sen = Number(document.getElementById("senha").value)
    var sal = Number(document.getElementById("dinheiro").value)
    if (sen != senha){
        alert("Acesso negado! Senha incorreta")
    }
    else if (sal > 1000){
        alert(`Saldo insuficiente, seu saldo é de R$${saldo}`)
    }
    else if (sal <= 1000){
        alert("O valor pode ser sacado")
        document.write(`Valor a ser sacado é de R$${sal}, saldo remanescente é de R$${saldo - sal}`)
    }
    
}