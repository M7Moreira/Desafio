
//Feito em Node.JS, com node devidamente instalado abra o terminal no diretório correto e digite "Node inversa.js" para rodar a aplicação.



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para inverter a string
function inverterString(string) {
    let stringInvertida = "";
    // invertendo string e compilando em uma outra variavel
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

// input de texto a ser invertido
rl.question('Digite uma string: ', (texto) => {
  // Inverter a string e imprimir o resultado
  let textoInvertido = inverterString(texto);
  console.log("String invertida:", textoInvertido);
  
  // Fechar console
  rl.close();
});