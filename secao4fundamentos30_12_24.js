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
console.log (palavra)
console.log (typeof palavra)

//tipos number

const peso1 = 1.1
const peso2 = Number("2.0") // transforma em numero

console.log(peso1, peso2)
console.log (Number.isInteger(peso1) ,(Number.isInteger(peso2)) ) 

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2

const media = total /(peso1 + peso2)

console.log(media.toFixed(2)) // encurtar o numero
console.log(media.toString(2)) // em binario

// nao faça isso
console.log(7/0)
console.log("10"/2)
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

console.log(escola.substring(0,3)) // strind de x ate y 0 -> 3 = COD

console.log('Escola '.concat(escola).concat("!"))

console.log (escola.replace(3 , "E"))// SUBSTITUIR UMA STRING

console.log (escola.replace(/\d/ , "E")) // SUBSTITUIR todos os D 

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

console.log((''|| null|| 0 || 'epa')) // 'epa' é verdadeiro

let names = ''

console.log(names || 'Desconhecido')

//Array #aula 46#

const valores= [1.1, 2.1 , 3.2 , 4.1]

console.log(valores [0], valores[2])

valores [2] = 4

console.log(valores.length)

valores.push({id: 3}, false,null, "teste")

console.log(valores)

console.log(valores.pop())

delete valores[0]

console.log(valores)

//objetos #aula 47#

const prod1 = {}
prod1.nome = 'celular top'
prod1.preco = 1999

console.log(prod1)