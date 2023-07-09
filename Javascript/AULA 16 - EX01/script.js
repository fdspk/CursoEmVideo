let array = []
let n = document.getElementById('txtn')

function isCadastrado(n){
    return array.indexOf(n)!=-1
}

function adicionar() {
    document.getElementById('retirar').innerHTML=''
    if (n.value == '' || Number(n.value) < 1 || Number(n.value) > 100) {
        alert('Favor inserir número válido')
    }
    else if(isCadastrado(Number(n.value))){
        alert('Número já foi cadastrado')
    }
    else {
        let res = document.getElementById('res')
        array.push(Number(n.value))
        let item = document.createElement('option')
        item.text = array[array.length - 1]
        res.appendChild(item)
    }
}

function gerarDados() {
    if (array.length == 0) {
        alert("Favor inserir valores")
    }
    else {
        var dados = document.getElementById('dados')
        dados.innerHTML = ''
        dados.innerHTML += `Ao todo temos ${array.length} números cadastrados</br>`
        array.sort()
        dados.innerHTML += `O menor valor informado é ${array[0]}</br>`
        dados.innerHTML += `O maior valor informado é ${array[array.length - 1]}</br>`

        let soma = 0
        for (let i in array) {
            soma += array[i]
        }
        dados.innerHTML += `A soma dos valores é ${soma}</br>`
        dados.innerHTML += `A média dos valores é ${soma / array.length}</br>`
    }

    
}
