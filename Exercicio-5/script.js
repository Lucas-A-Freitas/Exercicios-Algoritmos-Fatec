function calcular() {
    var n1 = Number(document.getElementById("numero").value)
    if (n1 <= 4) {
        alert("Não pode competir")
    }
    else if (n1 >= 5 && n1 <= 7) {
        alert("Categoria Infantil A")
    }
    else if (n1 >= 8 && n1 <= 11) {
        alert("Categoria Infantil B")
    }
    else if (n1 >= 12 && n1 <= 13) {
        alert("Categoria Juvenil A")
    }
    else if (n1 >= 14 && n1 <= 17) {
        alert("Categoria Juvenil B")
    }
    else if (n1 >= 18) {
        alert("Adulto")
    }
}