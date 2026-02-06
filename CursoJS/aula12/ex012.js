agora=new Date()
hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas!`)
if(hora<13 && hora>=5){
    console.log('Bom dia!')
}else if(hora>=13 && hora<18){
    console.log('Boa tarde!')
}else if(hora>=18 || hora<5){
    console.log('Boa noite!')
}