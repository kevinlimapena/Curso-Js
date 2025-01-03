function soBoaNoticia(nota){
    if(nota>=7){
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade' + valor)
        
    }
}

seForVerdadeEuFalo(1)


function teste (supervalor){
    if(supervalor >7){
        console.log(supervalor)
        console.log('final')
    }else{
        console.log('valor invalido')
    }

}

teste(8)

//79. Usando a Estrutura IF/ELSE

const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)

//80. Usando a Estrutura IF/ELSE 

Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <=fim
}

 const imprimirResultadoMelhor = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7,8.99)){
        console.log('aprovado')

    }else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0,3.99)){
        console.log('Reprovado')
    }else{
        console.log('valor invalido')
    }
 }

 imprimirResultadoMelhor(10)

 //81. Usando a Estrutura SWITCH

 const imprimirResultadoSwitch = function(nota){
     switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
        case 6: case 5 : case 4:
            console.log('Recuperação')
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')        
                 
            
     }
 }

 imprimirResultadoSwitch(10)
 imprimirResultadoSwitch(8.9)
 imprimirResultadoSwitch(5)
 imprimirResultadoSwitch(1)

 //92. Usando a Estrutura WHILE

 function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
 }

 let opcao = 0

 while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opcao escolhida ${opcao}`)
 }

 console.log('ate a proxima')



 do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opcao escolhida ${opcao}`)
 } while (opcao != -1)

//85. Usando a Estrutura FOR

let contador = 1

while(contador <=10){
    console.log(`contador = ${contador}`)
    contador++
}

for(let i; i<=10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7,7.4,9.8,8.1,7.7]

for(i = 0; i< notas.length; i++){
    console.log(`notas ${notas[i]}`)
}

//86. Usando a Estrutura FOR/IN

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome : 'ANA',
    sobrenome : 'SILVA',
    idade : 43,
    peso : 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//87. Usando Break/Continue

const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue // pula esse e vai para a proxima
    }
    console.log(`${y} = ${nums[y]}`)
}