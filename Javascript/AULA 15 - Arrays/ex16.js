let num=[5,8,2,9,3]
console.log(`Nosso vetor é o ${num}, tamanho é ${num.length}`)

num[5]=6 //javascript cria posicao nova
console.log(`Nosso vetor é o ${num}, tamanho é ${num.length}`)
num.push(7)//poe na ultima posicao criada
console.log(`Nosso vetor é o ${num}, tamanho é ${num.length}`)

num.sort()//ordena
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.pop()//retira o ultimo elemento
console.log(num)

//percorrer vetor #1
for(let i =0; i<num.length;i++){
    console.log(num[i])
}
console.log('')
//percorrer vetor #2 - jeito mais facil: p/ array e objetos
for(let i in num){
    console.log(num[i])
}
console.log('')

//busca de valor no vetor - nao precisa estar ordenado
let valores=[7,11,2,3]
let numsete=valores.indexOf(7)//procura onde está a posicao do valor 7
let numum=valores.indexOf(1)// retorna -1 = nao existe
console.log(`O 7 está na posição ${numsete} e o 1 está na ${numum}`)