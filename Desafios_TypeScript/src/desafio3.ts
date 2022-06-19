let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let Total = 0

limparSaldo()
function somarAoSaldo(soma:number) {
    
    if(campoSaldo){
        Total += soma
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
botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
