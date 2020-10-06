const express = require('express');

const UsuarioController = require('./controllers/UsuarioControllers');

const routes = express.Router();


routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);



module.exports = routes;