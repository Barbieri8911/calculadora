let valorTemp = '1';
let operacao = '+';
let resultado;

let valorUm = '0';
let valorDois = '0';

function attValor(valor) {
    if (valorTemp === '0') {
        valorTemp = valor;
    } else {
        valorTemp = valorTemp + valor;
    }
    console.log(valorTemp);
}

function escolhaOperacao(op) {
    operacao = op;
    valorUm = valorTemp;
    valorTemp = '0';
    console.log(operacao);
}

function calcular() {
    let tag = document.getElementById("resultado");

    valorDois = valorTemp;
    valorTemp = '0';

    if (operacao === '+') {
        resultado = Number(valorUm) + Number(valorDois);
    } else if (operacao === '-') {
        resultado =  Number(valorUm) - Number(valorDois);
    } else if (operacao === '*') {
        resultado =  Number(valorUm) * Number(valorDois);
    } else if (operacao === '/') {
        resultado =  Number(valorUm) / Number(valorDois);
    }

    tag.innerHTML = resultado;
    console.log(resultado);
}



