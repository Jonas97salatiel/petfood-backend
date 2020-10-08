const express = require('express');

const UsuarioController = require('./controllers/UsuarioControllers');
const EnderecoUsuariosControllers = require('./controllers/EnderecoUsuariosControllers');
const ParceiroController = require('./controllers/ParceiroController');

const routes = express.Router();


routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.alterUser);

routes.post('/enderecos', EnderecoUsuariosControllers.create);
routes.get('/enderecos', EnderecoUsuariosControllers.index);
routes.put('/enderecos/:id_endereco', EnderecoUsuariosControllers.alterEndereco);


routes.post('/parceiro', ParceiroController.create);



module.exports = routes;