function parimp(n){
    if(n%2==0){
        return 'par'
    }
    else{
        return'ímpar'
    }
}
let num=23
console.log(`O número ${num} é ${parimp(num)}`)