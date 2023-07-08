function mostrar() {
    var res = document.getElementById('res')
    res.innerHTML = 'Contando:</br>'
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    if (passo <= 0) {
        alert('Passo inválido: ponha valor maior que 0')
    }
    else {
        for (var cont = inicio; cont <= fim; cont += passo) {
            res.innerHTML += `${cont} &#x27A1`
        }
        res.innerHTML+='&#x1F3F4'
    }

}