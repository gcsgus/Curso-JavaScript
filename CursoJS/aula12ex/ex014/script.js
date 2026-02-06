function carregar() {
msg=document.getElementById('msg')
img=document.getElementById('imagem')
msg2=document.getElementById('msg2')
data=new Date()
hora=data.getHours() 
msg.innerHTML=`Agora são ${hora} horas`

if(hora<13 && hora>=5){
    msg2.innerHTML='Bom dia!'
    img.src='fotomanha.png.jpg'
    document.body.style.background='#8fa024'
}else if(hora>=13 && hora<18){
    msg2.innerHTML='Boa tarde!'
    img.src='fototarde.png.jpg'
    document.body.style.background='#9b571c'
}else if(hora>=18 || hora<5){
    msg2.innerHTML='Boa noite!'
    img.src='fotonoite.png.jpg'
    document.body.style.background='#140845'
}
}