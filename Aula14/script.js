function Contar() {
    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var res = document.getElementById("res")

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = "Impossivel contar"
        window.alert("Digite os números")
    } else {
        res.innerHTML = "CONTANDO:"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido, considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F57A}`
            }
        } else {
            //contagem regressiva   
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F57A}`
            }
        }
    }
}