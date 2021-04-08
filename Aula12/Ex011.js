var idade = 17
console.log(`Você tem ${idade}`)
if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18 || idade > 60) {
    console.log("Voto não obrigatório")
} else {
    console.log("Voto obrigatório")
}