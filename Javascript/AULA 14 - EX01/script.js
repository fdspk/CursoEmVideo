function mostrar() {
    var res = document.getElementById('res')
    res.innerHTML = 'Contando:</br>'

    var txtinicio=document.getElementById('txtinicio').value
    var txtfim=document.getElementById('txtfim').value
    var txtpasso=document.getElementById('txtpasso').value

    var inicio = Number(txtinicio)
    var fim = Number(txtfim)
    var passo = Number(txtpasso)

    if(txtinicio=='' || txtfim.length==0 || txtpasso==''){
        alert('Inserir todos os valores')
    }
    else if (passo <= 0) {
        alert('Passo inválido: ponha valor maior que 0')
    }
    else if(inicio<=fim) {
        for (var cont = inicio; cont <= fim; cont += passo) {
            res.innerHTML += `${cont} &#x27A1`
        }
        res.innerHTML+='&#x1F3F4'
    }
    else {
        for (var cont = inicio; cont >=fim; cont -= passo) {
            res.innerHTML += `${cont} &#x27A1`
        }
        res.innerHTML+='&#x1F3F4'
    }

}