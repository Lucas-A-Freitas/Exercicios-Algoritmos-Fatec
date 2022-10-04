function calcular() {
    var n1 = Number(document.getElementById('numero').value)
    if (n1 > 100) {
        alert('O número é maior que 100')
    } else if (n1 == 100) {
        alert('O número é igual a 100')
    } else if (n1 < 100) {
        alert('O número é menor que 100')
    }
}