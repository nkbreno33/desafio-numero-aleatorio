const acertou = document.querySelector('.container__texto h1');
const iniciarBt = document.querySelector('.container__botao');

let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

iniciarBt.addEventListener('click', clicou);

function clicou () {
    while (chute != numeroSecreto) {
        chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
          
        if (chute == numeroSecreto && tentativas > 1) {
            acertou.innerHTML = `Você acertou com ${tentativas} tentativas`
        }
        else if (chute == numeroSecreto && tentativas <= 1){
            acertou.innerHTML = `Você acertou com ${tentativas} tentativa`
        }
        else {
            if (chute > numeroSecreto){
                alert(`O numero secreto é menor que ${chute}`);
            }   else {
                alert(`o numero secreto é maior que ${chute}`);
            }
            tentativas ++; 
        }
    } 
}

