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

 

//113. Lista de exercícios: Fundamentos, Estruturas de controle e Funções

/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.
*/ 
const valores = function (x, y) {
    return console.log(`subtração: ${x - y} soma: ${x + y} multiplicação: ${x * y} divisão: ${x / y} `) 
}

valores(2,2)

/* 
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const triangulo = function(x,y,z){
    let resultado = ''

    if(x == y == z){
        resultado = 'Equilátero'
    }else if(x == y|| x == z || y ==z){
        resultado = 'Isósceles'
    }else if(x != y != z){
        resultado = 'Escaleno'
    }
    return resultado
}
console.log(triangulo(2,1,3))

//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const elevar = function(base,expoente){
    return console.log(base ** expoente)

}

elevar(2,10)

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const dividir = function(dividendo,divisor){    
        return console.log(`resultado: ${dividendo/divisor} resto: ${dividendo%divisor}`)

}
dividir(895,50)

/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

console.log(0.1 + 0.2);

function arredondar (valor){
    let valorcorrigido = Math.round(valor *10)/10
    return console.log(`R$ ${valorcorrigido}`)
}

arredondar(0.1 + 0.2)

/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
*/

const aplicacao = function (capInicial, taxJuros, tempo){
    jurosSimples = capInicial * taxJuros * tempo
     
     MSimples = () => console.log(`montante com juros simples: ${capInicial + jurosSimples}`) 
     MComposto = () => console.log(`montante com juros composto: ${capInicial + (1 + taxJuros)**tempo}`) 
     MComposto()
     MSimples()

} 

aplicacao(1000,0.5,24)

/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

const Bhaskara = function(a,b,c){
   // formula = a*x**2 + b*x + c
    delta = b**2 - 4*a*c
    if(delta<0){
        return console.log('Delta é negativo')
    }else{
        return console.log(`valor: ${delta}`)
    }
}

Bhaskara(3,5,12)

/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)

*/

