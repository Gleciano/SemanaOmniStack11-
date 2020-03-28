const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * GET: Buscar uma informação do back-end
  * POST: criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  * /
  
  /**
  * Tipos de Parametros:
  * 
  * Query params: parametros nomeados enviados na rota após o simbolo *?* (filtros, paginação)
  * Route params: parametro utilizado para identificar recursos. 
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * 
   * BANCO DE DADOS: 
   * Relacional: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * Não Relacional: MongoDB, CouchDB, etc
   */

/**
 * Driver: SELECT FROM users
 * Query Builder: table('users').select('*').where()
 */

