var numero = document.getElementById("fnum")
var lista = document.getElementById("flista")
var res = document.getElementById("res")
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

    function Adicionar() {
        if (isNumero(numero.value) && !inLista(numero.value, valores)) {
            valores.push(Number(numero.value))
            var item = document.createElement("option")
            item.text = `Valor ${numero.value} adicionado`
            lista.appendChild(item)
            res.innerHTML = ""
        } else {
            window.alert("Valor inválido ou já encontrado na lista. ")
        }
        numero.value = ""
        numero.focus()
    }
    function Finalizar (){
        if(valores.length==0){
            window.alert("Adicione valores antes de finalizar")
        }else{
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0
            for(var pos in valores){
                soma+= valores[pos]
                media += soma/tot
                if(valores [pos] > maior)
                    maior = valores[pos]
                if(valores[pos] < menor)
                menor = valores[pos]
            }
            res.innerHTML = ""
            res.innerHTML += `<p>Ao todo, temos ${tot} elementos cadastrados.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
            res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
            
        }
    }
