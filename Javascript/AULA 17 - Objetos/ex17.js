let pessoa={
    nome:'José',
    sexo:'M',
    peso:88.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso+=p
    }
}
 
//parece muito com array, mas os indices tem os nomes que vc cria

console.log(typeof pessoa)
console.log(pessoa)
console.log(pessoa.nome)
console.log(`Peso= ${pessoa.peso} Kg`)
pessoa.engordar(2)
console.log(`Peso= ${pessoa.peso} Kg`)