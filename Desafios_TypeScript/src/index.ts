let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
const button = document.getElementById('button')


function SomaNumero(num1:number, num2:number){
    return num1 + num2
}

if(button){
    button.addEventListener('click', ()=>{
        console.log(SomaNumero(Number( input1.value),Number( input2.value)))
    }) 
}
