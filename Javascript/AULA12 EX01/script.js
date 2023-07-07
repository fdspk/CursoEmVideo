function carregar(){
var bg=document.getElementsByTagName('body')[0]
var msg=document.getElementById('msg')
var img=document.getElementById('imagem')
var hora= new Date()
hora=hora.getHours()
//hora=21
msg.innerHTML=`Agora são ${hora} horas`

if(hora>=5 && hora<12){
    //Bom dia
    img.src="manha.jpg"
    bg.style.background='#FBF9ED'
    document.getElementById('titulo').style.color='black'
}
else if(hora>=12 && hora<=18){
    //boa tarde
    img.src="tarde.jpg"
    bg.style.background='#462C45'
}
else{
    //boa noite
    img.src="noite.jpg"
    bg.style.background='#001C2A'
}
}