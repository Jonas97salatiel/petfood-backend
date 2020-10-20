const express = require('express');

const UsuarioController = require('./controllers/UsuarioControllers');
const EnderecoUsuariosControllers = require('./controllers/EnderecoUsuariosControllers');
const ParceiroControllers = require('./controllers/ParceiroControllers');
const FormaPagamentoControllers = require('./controllers/FormaPagamentoControllers');
const HistoricoMovimentacaoControllers = require('./controllers/HistoricoMovimentacaoControllers');
const ClienteControllers = require('./controllers/ClienteControllers');
const MarcaControllers = require('./controllers/MarcaControllers');





const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.alterUser);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.post('/enderecos/:userId', EnderecoUsuariosControllers.create);
routes.get('/enderecos', EnderecoUsuariosControllers.index);
routes.put('/enderecos/:id_endereco', EnderecoUsuariosControllers.alterEndereco);
routes.delete('/enderecos/:id_endereco', EnderecoUsuariosControllers.delete)

routes.post('/parceiro', ParceiroControllers.create );
routes.get('/parceiro', ParceiroControllers.index );
routes.put('/parceiro/:idParceiro', ParceiroControllers.alterParceiro);
routes.put('/parceiro/:idParceiro', ParceiroControllers.delete);


routes.post('/clientes', ClienteControllers.create);
routes.put('/clientes', ClienteControllers.alterCliente);
routes.get('/clientes', ClienteControllers.indexCliente);


routes.post('/marca', MarcaControllers.create);
routes.put('/marca/:idMarca', MarcaControllers.alterMarca);
routes.get('/marca', MarcaControllers.index);
routes.delete('/marca/:idMarca', MarcaControllers.delete);



routes.post('/formaPagamento',FormaPagamentoControllers.create);

routes.post('/historicoMovimentacao', HistoricoMovimentacaoControllers.create);

module.exports = routes;