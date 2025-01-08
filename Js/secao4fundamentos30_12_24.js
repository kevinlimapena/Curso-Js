//seção 4 JavaScript: Fundamentos 

console.log("Sentença de Codigos")

{
    {
        console.log("olá")
        console.log("mundo")
    }
}

//comentarios

// uma linha

/*

varias linhas 

*/

//variaveis e constantes

var a = 3
let b = 4

var a = 30
b = 40 //da erro se usar b let b = 40

console.log(a, b)

//type of

let palavra = "Legal"
console.log(palavra)
console.log(typeof palavra)

//tipos number

const peso1 = 1.1
const peso2 = Number("2.0") // transforma em numero

console.log(peso1, peso2)
console.log(Number.isInteger(peso1), (Number.isInteger(peso2)))

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // encurtar o numero
console.log(media.toString(2)) // em binario

// nao faça isso
console.log(7 / 0)
console.log("10" / 2)
console.log("show" * 2)
console.log("show" * 2)
console.log(0.1 + 0.7)
console.log(0.1 + 0.7)

//math
const pi = Math.PI
const raio = 5.6
const area = pi * pi * raio
console.log(area)
console.log(typeof Math)

//Strings

const escola = "COD3R"

console.log(escola.charAt(4)) // string no indice

console.log(escola.charCodeAt(4)) // valor na tabela unicode 82 = R

console.log(escola.indexOf('3')) // valor do index

console.log(escola.substring(0, 3)) // strind de x ate y 0 -> 3 = COD

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3, "E"))// SUBSTITUIR UMA STRING

console.log(escola.replace(/\d/, "E")) // SUBSTITUIR todos os D 

console.log("Ana,Maria,Pedro".split(',')) // array com 3 elementos [ 'Ana', 'Maria', 'Pedro' ]

//template Strings

const nome = 'rebeca'
const contatenacao = 'oi ' + nome

const template = `
olá 
${nome}
`
console.log(template) // leva em consideracao os espacos

console.log(contatenacao) // normal

//expressoes em template ` `
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)


//Boolean ou booleano

let isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log(!!NaN)

console.log(('' || null || 0 || 'epa')) // 'epa' é verdadeiro

let names = ''

console.log(names || 'Desconhecido')

//Array #aula 46#

const valores = [1.1, 2.1, 3.2, 4.1]

console.log(valores[0], valores[2])

valores[2] = 4

console.log(valores.length)

valores.push({ id: 3 }, false, null, "teste")

console.log(valores)

console.log(valores.pop())

delete valores[0]

console.log(valores)

//objetos #aula 47#

const prod1 = {}
prod1.nome = 'celular top'
prod1.preco = 1999
prod1['Desconto'] = 1.9
console.log(prod1)

const prod2 = {
    nome: "kevin",
    preco: 1999
}
console.log(prod2)

'{"nome": "kevin"}' //json é diferente de obj json é um formato textual

//null

let valor // nao inicializada

console.log(valor)

valor = null // sem valor

//Funcao é super importante no js

console.log(typeof Object) // function

class produto { }

console.log(typeof produto) // function

//funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//funcao com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))

//armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel

const somas = (a, b) => {
    return a + b
}

//retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(2, 1))

//acesso

function test() {
    var local = 123
}
console.log(local) // nao consegue acessar

var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero) // nao faz diferenca no var

//usando let

var newNumber = 1

{
    let newNumber = 2
    console.log('dentro =', newNumber)
}
console.log('fora =', newNumber) // o escopo usando let faz diferenca

//usando loop no var

function variavelNova(a = 0) {

    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log('nova ', i)
}

variavelNova(0)

//usando loop no let

function variavelnew() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log(i) // gera erro nao pega
}
//Hoisting Joga para cima 

console.log('K= ', K)
var K = 2
console.log('K= ', K) //acontece com var mas nao com let

console.log('K= ', K)
let K = 2
console.log('K= ', K) // erro

//funcao e objeto 

console.log(typeof Object)

console.log(typeof new Object)

const Cliente = function(){}

console.log(typeof Cliente)

console.log(typeof new Cliente)

class product {}

console.log(typeof product)

console.log(typeof new product())
