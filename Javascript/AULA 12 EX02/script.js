function verificar(){
    var ano = new Date()
    ano=ano.getFullYear()
    var fAno=document.getElementById('txtano').value
    var res= document.getElementById('res')

    if(fAno.length==0 || fAno>ano){
        alert('Verifique os dados e tente novamente')
    }
    else{
        var fSex=document.getElementsByName('radsex')
        var idade= ano-fAno
        var genero =''
        var img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero='homem'
            if(idade>=0 && idade<=10){
                //crianca
                img.setAttribute('src', 'bbm.jpg')
            }
            else if(idade>10 && idade<30){
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            }
            else if(idade>=30 && idade<60){
                //adulto
                img.src='adultom.jpg'
            }
            else{
                //idoso
                img.src='idosom.jpg'
            }

        }
        else{
            genero='mulher'
            if(idade>=0 && idade<=10){
                //crianca
                img.setAttribute('src', 'bbf.jpg')
            }
            else if(idade>10 && idade<30){
                //jovem
                img.setAttribute('src', 'jovemf.jpg')
            }
            else if(idade>=30 && idade<60){
                //adulto
                img.src='adultof.jpg'
            }
            else{
                //idoso
                img.src='idosaf.jpg'
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Você é ${genero} com ${idade} anos`
        res.appendChild(img)
}
}