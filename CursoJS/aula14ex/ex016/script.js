function contar(){
    let inicio=Number(document.getElementById('inicio').value)
    let fim=Number(document.getElementById('fim').value)
    let passo=Number(document.getElementById('passo').value)
    let res=document.getElementById('res')

    if(inicio == 0||fim == 0){
        res.innerHTML='Impossível contar!'
        
    }else{
        res.innerHTML='Contando: <br>'
        if(passo<=0){
            window.alert('Passo inválido! Considerando passo 1')
            passo=1
        }
        if(inicio<fim){
            for(c=inicio;c<=fim;c+=passo){
                res.innerHTML+=` ${c} \u{1F449}`
            }
        } else{
            for(c=inicio;c>=fim;c-=passo){
                res.innerHTML+=` ${c} \u{1F449}`
            }
        }
        res.innerHTML+=`\u{1F3C1}`
        
        
    
    

    
    }

}