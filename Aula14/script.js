function Contar() {
    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var res = document.getElementById("res")
    var c = i

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert("Digite os números")
    } else {
        res.innerHTML = "CONTANDO:"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${ c   }  \u{1F57A}`
        }
    }
}