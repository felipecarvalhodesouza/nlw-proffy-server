import express from 'express';

const app = express();

//Express não entende retorno da requisição em JSON por padrão.
app.use(express.json())

// Métodos HTTP
// GET
// POST
// PUT
// DELETE

// Tipos de parâmetros
// Corpo (ResquestBody) : Criação ou atualização  de um registro.
// Route Params : Identificar qual recurso eu quero atualizar ou deletar.
// Query Params : Paginação, filtros, ordenação, etc

app.get('/', (request, response) => {
    return response.json( {message: 'Hello World!'});
});

app.listen(3333);

// KNEX serve para escrever queries SQL em Js;
// SQLite 3 foi o banco selecionado.

