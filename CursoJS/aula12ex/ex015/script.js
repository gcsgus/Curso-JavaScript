function verificar(){
    data=new Date()
    ano=data.getFullYear()
    fano=document.getElementById('txtano')
    res=document.getElementById('res')
    if (fano.value.length==0 || Number(fano.value)>ano){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else{
        fsex=document.getElementsByName('radsex')
        idade=ano-Number(fano.value)
        genero=''
        img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade <10){
                img.setAttribute('src','criancamasc.jpg')
                // criança  
            }else if(idade <21){
                img.setAttribute('src','jovemmasc.jpg')
                // jovem
            }else if(idade<60){
                img.setAttribute('src','adultomasc.jpg')
                // adulto
            }else{
                img.setAttribute('src','idosomasc.jpg')
                //idoso
            }
        } else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade <10){
                img.setAttribute('src','criancafem.jpg')
                // criança  
            }else if(idade <21){
                img.setAttribute('src','jovemfem.jpg')
                // jovem
            }else if(idade<60){
                img.setAttribute('src','adultofem.jpg')
                // adulto
            }else{
                img.setAttribute('src','idosofem.jpg')
                //idoso
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}





/*
function verificacao(){
    
    anonasc=document.getElementById('ano')
    sexo=document.querySelector('input[name="genero"]:checked')//usar essa porra ai quando tiver mexendo com input:radio
    msg=document.getElementById('msg')
    img=document.getElementById('imagem')
    ano=Number(anonasc.value)
    idade=(2025-ano)
    
    if (!ano || !genero) {
        msg.innerHTML = "⚠️ Preencha todos os dados!"
        return
    }
    
    if(idade>=60 && sexo.value==='masculino'){
        msg.innerHTML=`Detectamos um Homem com ${idade} anos!`
        img.src='idosomasc.jpg'
    }else if(idade>=60 && sexo.value==='feminino'){
        msg.innerHTML=`Detectamos uma Mulher com ${idade} anos!`
        img.src='idosofem.jpg'
    }else if(idade<60 && idade>=25 && sexo.value==='masculino'){
        msg.innerHTML=`Detectamos um Homem com ${idade} anos!`
        img.src='adultomasc.jpg'
    }else if(idade<60 && idade>=25 && sexo.value==='feminino'){
        msg.innerHTML=`Detectamos uma Mulher com ${idade} anos!`
        img.src='adultofem.jpg'
    }else if(idade<25 && idade>=15 && sexo.value==='masculino'){
        msg.innerHTML=`Detectamos um Homem com ${idade} anos!`
        img.src='jovemmasc.jpg'
    }else if(idade<25 && idade>=15 && sexo.value==='feminino'){
        msg.innerHTML=`Detectamos uma Mulher com ${idade} anos!`
        img.src='jovemfem.jpg'
    }else if(idade>=1 && idade<15 && sexo.value==='masculino'){
        msg.innerHTML=`Detectamos um Homem com ${idade} anos!`
        img.src='criancamasc.jpg'
    }else if(idade>=1 && idade<15 && sexo.value==='feminino'){
        msg.innerHTML=`Detectamos uma Mulher com ${idade} anos!`
        img.src='criancafem.jpg'
    }

}
*/
