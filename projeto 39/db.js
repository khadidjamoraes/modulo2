
const Sequelize = require('sequelize');

const sequelize = new Sequelize("db01", "root", "Khadidja", {
    host: "localhost", 
    dialect: "mysql",
});

sequelize.authenticate().then(function(){
    console.log ("O banco foi ativado!");
}).catch(function(erro){
    console.log(erro)
})

