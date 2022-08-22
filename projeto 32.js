const readline = require('readline-sync');

var numero1 = NaN;
var numero2 = NaN;
var res = NaN;
var sobra = NaN;
var operacao;

while (isNaN(numero1)){
    numero1 = readline.questionInt("Digite o primeiro número");
} 
while (isNaN(numero2)){
    numero2 = readline.questionInt("Digite o segundo número");
} 
{
operacao = readline.questionInt("Digite qual operador aritmética deseja fazer: adição, subtração, multiplicação ou divisão");

    if (operacao == 1);
            res = numero1 + numero2;

    if (operacao == 2);
        res = numero1 - numero2;

    
    if (operacao == 3);
        res = numero1 * numero2;

    if (operacao == 4);
        if(numero2 === 0){
            console.log("Erro!")
        }
        else {
            res = numero1 / numero2;
            if(numero1 > numero2){
            sobra = numero1 % numero2;
            }
            else{
                sobra = 0;
            }
        }

}
console.log(`O resultado é ${res}!`);
if(operacao === 4){
    console.log(`A sobra é ${sobra}!`);
}