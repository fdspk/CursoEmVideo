function tabuada(){
    var txtn=document.getElementById('txtn').value
    var n=Number(txtn)
    var res=document.getElementById('res')
    var resultado
    if(txtn==''){
        alert('Favor inserir número')
    }
    else{
        res.innerHTML=''
        for(var i=0; i<=10; i++){
            var item=document.createElement('option')
            resultado=n*i
            item.text=`${n} x ${i} = ${resultado}`
            item.value=`tab${i}` //util para outras linguagens
            res.appendChild(item)
        }
    }
}