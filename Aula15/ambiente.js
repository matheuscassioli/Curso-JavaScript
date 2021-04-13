let num = [5, 8, 2, 9, 3]
let pos = num.indexOf(3)
    //num.push(10) // adiciona 10 pós ultimo vetor
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`) // .lenght sabe quantos vetores possui
    //console.log(`Nosso vetor na posição 6 é o ${num[5]}`) // localiza elemento através da posição


if (pos == -1) { //quando não possui o valor solicitado, o js imprimi -1 
    console.log(`O valor declarado não existe dentre os vetores`)
} else {
    console.log(`Existe o valor 3? ... Caso exista a posição é ${pos}`)
}


//  .sort() -- organiza vetores em ordem crescente