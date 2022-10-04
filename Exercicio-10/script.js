function calc() {
    var escolha = Number(document.getElementById('escolha').value)
    var litro = Number(document.getElementById('litro').value)

    if (escolha == 1) {
        if (litro <= 20) {
            n1 = litro * 2.646
            alert(`Você pagara ${n1}`)
        } else if (litro > 20) {
            n1 = litro * 2.565
            alert(`Você pagara ${n1}`)
        }
    } else if (escolha == 2) {
        if (litro <= 20) {
            n1 = litro * 3.977
            alert(`Você pagara ${n1}`)
        } else if (litro > 20) {
            n1 = litro * 3.854
            alert(`Você pagara ${n1}`)
        }
    }
}