let num=[1,2,3,4,5]
console.log(num)

num[5]=6
console.log(num)

num.push(7)
console.log(num)

console.log(`O vetor tem ${num.length} posições`)

/*
num=[3,6,2,4]
num.sort()
console.log(num)
*/

/*
for(pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(pos in num){  
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // maneira mais recente de se fazer isso(so funciona com arrays e objetos)
}  

ind=num.indexOf(2)
console.log(`O valor 2 está na posição ${ind}`)