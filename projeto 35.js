const readline = require('readline-sync');
var nome

// Primeiro código - sem parametros:

function mensagem(){
    return console.log("A mensagem foi mostrada!\n");
}
// Segundo código - função com parametros e com retorno:

function identidade(nome){
    nome = (readline.question("Digite seu nome: "));
    return console.log(`O seu nome é: ${nome}\n`);
}

// Terceiro código - arrow function:

const identidadeArrow = (nome) =>  console.log(`O seu nome completo é: ${nome}\n`);

mensagem();
identidade();
identidadeArrow("Khadidja Moraes Lopes da Silva");