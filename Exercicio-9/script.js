function checar() {
    let letra = document.getElementById("let").value
    let l1 = letra.toLowerCase();
    if (l1 == 'a' || l1 == 'e' || l1 == 'i' || l1 == 'o' || l1 == 'u') {
        alert("Vogal")
    }
    else {
        alert("Consoante")
    }
}
