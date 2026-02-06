let num=[]
function adicionar(){
    numero=Number(document.getElementById('txtnum').value)
    res=document.getElementById('res')
    
    
    if ( num.includes(numero) || numero<=0 || numero>100 ){
        window.alert('Valor inválido ou já encontrado na lista! Tente novamente.')
    } else {
        num.push(numero)
        item=document.createElement('option')
        item.text=`Valor ${numero} adicionado`
        res.appendChild(item)
        msg.innerHTML='' 
    }
    txtnum.value=''
    txtnum.focus()
}

function finalizar(){
    if(num.length==0){
        window.alert('Adicione valores antes de finalizar!')
    }else{

        let msg=document.getElementById('msg')
        msg.innerHTML=''
        let maior=Math.max(...num)
        let menor=Math.min(...num)
        let soma = num.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
        let media = soma / num.length


        msg.innerHTML+=`Ao todo, temos ${num.length} números cadastrados.<br><br>
                        O maior valor informado foi ${maior}.<br><br>
                        O menor valor informado foi ${menor}.<br><br>
                        A soma de todos os valores é ${soma}.<br><br>
                        A média dos valores é ${media.toFixed(2)}.<br><br>`
    

    }
}