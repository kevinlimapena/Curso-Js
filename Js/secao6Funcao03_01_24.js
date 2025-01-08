//88. Cidadão de Primeira Linha


//criar de forma literal
function fun1(){

}

//armazenar em uma variavel

const fun2 = function(){}

//armazenar em um array

const array = [function(a,b){return a + b}, fun1 , fun2]
console.log(array[0](2,3))

//passar funcao como parametro

function run (fun){
    fun()
}
run(function(){console.log('Execultando...')})

//funcam dentro da funcao

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(2)

//89. Parâmetros e Retorno São Opcionais

function area(largura,altura){
    const area = largura * altura
    if (area> 20){
        console.log(`Valor acima do permitido ${area}`)
    }else{
        return area
    }
}

console.log(area(2,2))

//90. Parâmetros Variáveis

function soma (){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,2,3))