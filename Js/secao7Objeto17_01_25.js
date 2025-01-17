//115. Revisão sobre Objeto

const produto = new Object

produto.nome = 'cadeira'

produto['marca'] = 'renner'

produto.preco= 220

console.log(produto)

const carro = {
    valor: 9000,

    propietario:{
    nome: 'Raul',
    idade: 56,
    endereco:{
        logradouro: 'rua abc',
        numero: 123
    }
}
}

carro.propietario.endereco.numero = 1000

//ou

carro['propietario']['endereco']['logradouro'] = 'av show'

console.log(carro)

delete carro.propietario.endereco.logradouro

console.log(carro.propietario.endereco.logradouro)