// Como podemos melhorar o esse código usando TS? 

interface IPessoa {
  nome: string,
  idade: number,
  trabalho: Profissao
}
enum Profissao{
    Atriz,
    Padeiro
}

let pessoa1: IPessoa = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
}
let pessoa2: IPessoa = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
}

let pessoa3: IPessoa = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
}
let pessoa4: IPessoa = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
}

