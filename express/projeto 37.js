
const express = require('express');

const app = express();

app.get('/project', (request, response) => { 
    return response.send ('Hello World!');
});

app.get('/', (request, response) => { 
    return response.send ('Site principal');
});

app.listen(4529, ()=> console.log("Servidor ativo"));