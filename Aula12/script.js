function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora =
        msg.innerText = `Agora são ${hora} horas`
    if (hora > 00 && hora < 12) {
        img.src = "manha-circle.png" // DIA
        document.body.style.background = "#e2cd9f"
    } else if (hora > 12 && hora < 18) {
        img.src = "tarde-circle.png" // TARDE
        document.body.style.background = "#b9846f"
    } else {
        img.src = "noite-circle.png"
        document.body.style.background = "#515154"
    }
}