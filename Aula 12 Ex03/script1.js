function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert("Verifique se você digitou corretamente")
    } else {}
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fAno.value)
    res.innerHTML = `Idade Calculada ${idade}`
    var img = document.createElement("img")
    var genero = ""
    if (fsex[0].checked) {
        genero = "Homem"
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute("src", "criancah-2.png")
            `
    `
        } else if (idade < 21) {
            // jovem
            img.setAttribute("src", "jovemh.png")
        } else if (idade < 50) {
            //adulto
            img.setAttribute("src", "adultoh-2.png")
        } else {
            //idoso
            img.setAttribute("src", "idosoh-2.png")
        }
    } else if (fsex[1].checked) {
        genero = "Mulher"
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute("src", "criancam-2.png")
        } else if (idade < 21) {
            // jovem
            img.setAttribute("src", "jovemm-2.png")
        } else if (idade < 50) {
            //adulto
            img.setAttribute("src", "adultom-2.png")
        } else {
            //idoso
            img.setAttribute("src", "idosom-2.png")
        }
    }
    res.innerHTML = `
    Detectamos $ { genero }
    com $ { idade }
    anos `
    res.appendChild(img)
}