var valores = [5, 6, 2, 9]
    //console.log(valores)
    /*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */
for (var pos in valores) { // simplificando com for in 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}