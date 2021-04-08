var agora = new Date()
var diaSem = agora.getDay()
    /* 0 = DOMINGO
       1 = SEGUNDA
       2 = TERÇA
       3 = QUARTA
       4 = QUINTA
       5 = SEXTA
       6 = SABADO
    */

console.log(`Hoje é ${diaSem}`)
switch (diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    default:
        console.log("Dia inválido")
}