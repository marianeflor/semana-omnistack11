/*
    * Rotas / Recursos = /users

    * Métodos HTTP:
        * GET = buscar / listar
        * POST = criar
        * PUT = alterar
        * DELETE = deletar
    
    * Típos de parâmetros:
        * Query: params nomeados enviados na rota após '?' => filtro, paginação
            ex: /users?name=Diego ou /users?page=2 ou /users?page=2&name=Diego&....
            * const params = req.query 

        * Route: params pra identificar recursos => único = id => app.put('/users/:id',...
            ex: /users/5 -> buscar usuário de id 5
            * const params = req.params ||  const id = req.params

        * Request Body: corpo da requisição, usado para criar ou alterar recursos
            * const body = req.body
    
    * Bancos de dados:
        * Relacionais = SQL => estruturado
            * Ex: MySQL, SQLite, PostgreSQL, Oracl, Microsoft SQL Server
            
            * Driver: SELECT * FROM users
            * Query Builder: table('users').select('*').where() => mais parecido com js => aceito em qlqr bd SQL 
                    => instalar knexjs: npm i knex --save, npm i sqlite3, npx knex init (cria arq knexfile.js)
            
        * Não Relacionais = NoSQL => pouco estruturado
            * Ex: MongoDB, couchDB
*/



const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors()) // em produção fazer obj com origin: 'http://meuapp.com' 
app.use(express.json())
app.use(routes) // ver arq routes
app.use(errors()) // tratar erros de validação

module.exports = app

