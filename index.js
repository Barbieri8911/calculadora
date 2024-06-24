let valorTemp = '0';
let operacao = null;
let valorUm = null;
let valorDois = null;

function attValor(valor) {
    if (valorTemp === '0') {
        valorTemp = valor;
    } else {
        valorTemp += valor;
    }
    document.getElementById("display").textContent = valorTemp; // Atualiza o display
    console.log(`Valor temporário: ${valorTemp}`);
}

function escolhaOperacao(op) {
    if (operacao !== null) {
        calcular();
    }
    operacao = op;
    valorUm = valorTemp;
    valorTemp = '0';
    document.getElementById("display").textContent = valorTemp; // Atualiza o display
    console.log(`Operação: ${operacao}`);
}

function calcular() {
    if (operacao === null || valorUm === null) return;

    valorDois = valorTemp;
    valorTemp = '0';

    let resultado;
    const numUm = Number(valorUm);
    const numDois = Number(valorDois);

    switch (operacao) {
        case '+':
            resultado = numUm + numDois;
            break;
        case '-':
            resultado = numUm - numDois;
            break;
        case '*':
            resultado = numUm * numDois;
            break;
        case '/':
            resultado = numUm / numDois;
            break;
        default:
            return;
    }

    document.getElementById("resultado").textContent = resultado;
    console.log(`Resultado: ${resultado}`);

    // Resetar para próxima operação
    valorUm = resultado.toString();
    operacao = null;

    if (resultado >= 100) {
        document.getElementById("resultado").style.color = 'red';
        console.log('red');
    } else {
        document.getElementById("resultado").style.color = 'blue';
    }
}

function limpar() {
    valorTemp = '0';
    operacao = null;
    valorUm = null;
    valorDois = null;
    document.getElementById("resultado").textContent = 'Resultado';
    document.getElementById("display").textContent = '0'; // Atualiza o display
    console.log('Calculadora limpa');
}
