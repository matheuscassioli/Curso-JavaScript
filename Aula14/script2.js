function Tabuada() {
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")
    if (num.value.length == 0) {
        window.alert("É Necessário digitar um número ")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            var item = document.createElement("option")
            item.innerText = `${n} x ${c} = ${n *c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}