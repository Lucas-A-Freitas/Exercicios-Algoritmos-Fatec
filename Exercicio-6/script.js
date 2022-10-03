function calcular()
{
    var n1 = Number(document.getElementById("peso").value)
    var diferença = n1 - 50
        var multa = diferença * 4
    if (n1 <= 50 ){
        alert("Peixe ok!")
    }else if (n1 >50)
        alert(`O peixe excedeu ${diferença}KG, sua multa é de R$${multa}`)

}