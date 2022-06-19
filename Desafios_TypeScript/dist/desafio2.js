"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
};
let pessoa2 = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
};
let pessoa3 = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
};
let pessoa4 = {
    nome: 'Rafeael',
    idade: 21,
    trabalho: Profissao.Atriz
};
