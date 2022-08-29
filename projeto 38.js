/*Aluno: Khadidja Moraes
Atividade:
- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.
*/

let rpg = {
    jogo: "Role playing games - RPG",
    nome: "por dentro",
    mesa: "ordem paranormal",
    qtPlayers: 6,
    estreia: "Setembro",
};

let players = ["Ayumi","Arthur","Gustavo", "Júlia" ,"Lucas" ,"Yasmin"];
let pos = [1, 2, 3, 4, 5];

const propriedade = () => {
    for (let prop in rpg) {
        console.log(`${prop}: ${rpg[prop]}`);
    }
}

const nomePlayers = () => {
     for (let nomePlayers of players) {
        console.log(`nome dos players: ${nomePlayers}`);
    }
}

propriedade();
nomePlayers();