"use strict";
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
const button = document.getElementById('button');
function SomaNumero(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener('click', () => {
        console.log(SomaNumero(Number(input1.value), Number(input2.value)));
    });
}
