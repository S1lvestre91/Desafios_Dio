"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let Total = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        Total += soma;
        campoSaldo.innerHTML = Total.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = " ";
}
function limparSaldo() {
    if (campoSaldo) {
        Total = 0;
        campoSaldo.innerHTML = Total.toString();
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
