const saudacao = 'oii'//contexto lexico1

function exec(){
const saudacao = 'fallaaa' //contexto lexico2
return saudacao
}
//objetos = nome/valor

const clientes = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'rua show',
        nuemro: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(clientes)

//Notação ponto

console.log(Math.ceil(6,1))

const obj1 = {}

obj1.nome = 'bola'
obj1['nome'] = 'bola2' //mesma coisa

function obj(nome){
    this.nome = nome //this transforma em publico

}
const obj2 = new obj()

//operacoes de atribuicoes

const a = 7
let b = 3

b += a // b = b+ a
b -= a // b = b -a
b *= a//b = b*a
b %= a // b = b%a

//operadores Destructuring 

const pessoa = {
    nome:'ana',
    idade: 5,
    endereco:{
numero : 10
    }
}
const {nome,idade} =pessoa

console.log(nome,idade)

const {nome:n,idade: i} = pessoa

console.log(n,i)

const {sobrenome,bemHumrada} =pessoa

console.log(sobrenome,bemHumrada)

//Operadores: Destructuring #02

const [x]= [10]

console.log(x)

const [n1,,n3,,n5,,n7] = [10,7,9,8]

console.log(n1,n3,n5,n6)

// Operadores: Destructuring #03

function rand({min =0,max =1000}){
    const valor = Math.random()*(max -min)+min
    return Math.floor(valor)
}
const obj = {max:50, min:40}
console.log(rand(obj))

// Operadores: Destructuring #04

function rand([min =0,max =1000]){
    if(min >max)[min,max]= [max,min]
    const valor = Math.random() * (max - min) +min
    return Math.floor(valor)
}

console.log(rand([50,40]))

console.log(rand([ ]))

//Operadores: Aritméticos

const [k,z,c,d] = [3,5,1,15]

const soma = k+z+c+d
const subtracao = d-b
const multiplicacao = k*z
const divisao = d/z
const modulo = a%2

console.log(soma,subtracao,multiplicacao,divisao)

//69. Operadores: Relacionais

console.log(('01)', '1'==1 ))

console.log(('02)', '1'===1 ))

console.log(('03)', '3'!=3 ))

console.log(('04)', '3'!==3 ))

console.log(('05)', 3<2 ))

console.log(('06)', 3>2 ))

console.log(('07)', 3<=2 ))

console.log(('08)', 3>=2 ))

const d1 = new Date(0)
const d2 = new Date(0)

console.log(('09)', d1 ===d2 ))
console.log(('10)', d1 ==d2 ))
console.log(('11)', d1.getDate() ==d2.getDate() ))
console.log(('12)', undefined ==null ))
console.log(('13)', undefined ==null ))

//70. Operadores: Lógicos

function compras (trabalho1, trabalho2){
    const comprarsorvete = trabalho1|| trabalho2
    const comprartv50 = trabalho1 && trabalho2
    const comprartv32 = trabalho1 !=trabalho2
    const manterSaudavel = !comprarsorvete

    return {comprarsorvete, comprartv50,comprartv32,manterSaudavel}

}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

//71. Operadores: Unários

let num1 = 1
let num2 = 2

num1 ++

console.log(num1)
--num1
console.log(num1)

console.log(++num1 == num2--)
console.log(num1 == num2)

//72. Operadores: Ternário

const resultado = nota => nota>= 7 ?'aprovado':'reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))

//73. Contexto de Execução: Browser vs Node

let l = 3
globalThis.v = 123
this.m = 456
console.log(l)
console.log(globalThis.v)
console.log(this.m)

//74. Tratamento de Erro (Try/Catch/Throw)

function tratarERRO(erro){
    throw '20'
}

function imprimirnomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()+ '!!!')
    }catch(e){
        tratarERRO(e) // se tiver erro
    } finally{
        console.log('final') //acontence tendo erro ou nao
    }
}

const obj = {name: 'Roberto'}

imprimirnomeGritado(obj)