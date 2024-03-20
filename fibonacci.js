
//Feito em Node.JS, com node devidamente instalado abra o terminal no diretório correto e digite "Node fibonacci.js" para rodar a aplicação.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function quadradoPerfeito(x) {
    const raiz = Math.floor(Math.sqrt(x));
    return raiz * raiz === x;
}

function eFibonacci(n) {
    return quadradoPerfeito(5 * n * n + 4) || quadradoPerfeito(5 * n * n - 4);
}

rl.question("Descobrir se número é Fibonacci\nEntre com um número: ", (num) => {
    num = parseFloat(num);
    if (eFibonacci(num)) {
        console.log(num + " pertence à série de Fibonacci.");
    } else {
        console.log(num + " não pertence à série de Fibonacci.");
    }
});