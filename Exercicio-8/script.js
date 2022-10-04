function calcular() {
    var a = parseFloat(document.getElementById("n1").value)
    var b = parseFloat(document.getElementById("n2").value)
    var c = parseFloat(document.getElementById("n3").value)
    if (b < a) {
        aux = a
        a = b
        b = aux
    }
    if (c < a) {
        aux = a
        a = c
        c = aux
    }
    if (c < b) {
        aux = b
        b = c
        c = aux
    }
    alert(a + "-" + b + "-" + c)
}
