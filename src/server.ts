import express from 'express';
import cors from 'cors';
import routes from './routes';

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

app.use(routes);
app.use(cors());

app.listen(3333);

// KNEX serve para escrever queries SQL em Js;
// SQLite 3 foi o banco selecionado.

