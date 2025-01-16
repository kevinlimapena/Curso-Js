//88. Cidadão de Primeira Linha


//criar de forma literal
function fun1() {

}

//armazenar em uma variavel

const fun2 = function () { }

//armazenar em um array

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//passar funcao como parametro

function run(fun) {
    fun()
}
run(function () { console.log('Execultando...') })

//funcam dentro da funcao

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(2)

//89. Parâmetros e Retorno São Opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}`)
    } else {
        return area
    }
}

console.log(area(2, 2))

//90. Parâmetros Variáveis

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 2, 3))

//91. Parâmetro Padrão

//estrategia 1 para gerar um valor padrão
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(
    soma2(),
    soma2(3),
    soma2(1, 2, 3),
    soma2(0, 0, 0),
)

//padrao atual

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

//92. "this" pode Variar e 93. "this" e a Função bind #01

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//94. "this" e a Função bind #02


function pessoa() {
    this.idade = 0
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new pessoa

//95. Funções Arrow #01

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI))

ola = () => 'Olá'

//96. Funções Arrow #02

function pessoa() {
    this.idade = 0
    setInterval => {
        this.idade++
        console.log(this.idade)
    }, 1000

}
//97. Funções Arrow #03

let comparathis = function (param) {
    console.log(this == param)
}
const obj = {}
comparathis(globalThis)

//98. Funções Anônimas

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, (x, y) => x - y)

imprimirResultado(3, 4, (x, y) => x * y)

//99. Funções Callback #01

const fabricantes = ['Mercerdes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1} . ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))

//100. Funções Callback #02

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


//sem callback
notasBaixas = [

]
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

NotasBaixas = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas)

const notasBaixasInt = notas.filter(nota => nota < 7)
console.log(notasBaixasInt)

//101. Funções Callback #03

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('o evento ocorreu!')
}

//102. Funções Construtoras

function Carro(velocidadeMax = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        return 'Bom dia'
    }
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()

//teste

function Carro(velocidadeMax = 200, delta = 5) {
    let velocidadeAtual = 0

    // Pertence ao objeto (público)
    this.acelerar = function () {

        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }

    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const Tesla = new Carro()
Tesla.acelerar() // Funciona!
Tesla.acelerar() // Funciona!
Tesla.acelerar() // Funciona!
Tesla.acelerar() // Funciona!
console.log(Tesla.getVelocidadeAtual())

//103. Tipos de Declaração

//function declaration
function soma(x, y) {
    return x + y
}
//function expression
const sub = function (x, y) {
    return x - y
}

//function named expression

const mult = function mult(x, y) {
    return x * y
}

//104. Contexto Léxico
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//105. Closures

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

//106. Função Factory #01

const prod1 = {
    nome: '',
    preco: 45
}

function criarpessoa(nomeDado, sobrenome) {
    return {
        pessoa: {
            nome: nomeDado,
            sobrenome: sobrenome,

        }

    }

}




console.log(criarpessoa('kevin', 'lima'))

//108. Classe vs Função Factory

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('jao')

p1.falar()

const criarpessoa = nome =>{
    return{
        falar:() => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarpessoa('joao')
p2.falar()

 
//109. Desafio Função Construtora


function  Humano(nome) {
     

    // Pertence ao objeto (público)
    this.falar = function () {

       return console.log(`meu nome é ${nome}`)

    }

    
}

const h1 = new Humano('kevin')

h1.falar()

const h2 = new Humano('manuel')

h2.falar()

//110. IIFE --> imediatamente invocada

(function(){
  console.log('sera execultado na hora')  
  console.log('Foge do escopo mais abragente')  
})()

//111. Call & Apply

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
    
}

const produto = {
nome:'Note',
preco:1212,
desc:0.15,
getPreco
}


global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const Carro = {preco :31212,desc:0.20}

console.log(getPreco.call(Carro,0.17,'$'))
console.log(getPreco.apply(global,[0.17,'$']))

//112. Comparação entre string de números

//113. Lista de exercícios: Fundamentos, Estruturas de controle e Funções