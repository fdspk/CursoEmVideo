//fatorial
function fatorial(n){
    let fat=1
    for(let i=n; i>1; i--){
        fat*=i
    }
    return fat
}
console.log(fatorial(5))

//recursivo
function fatrec(n){
    if (n==1)
        return 1
    else
        return n*fatrec(n-1)
}
console.log(fatrec(5))