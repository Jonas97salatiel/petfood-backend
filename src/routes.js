const express = require('express');

const authMiddleware = require('./middlewares/auth')

const UsuarioController = require('./controllers/UsuarioControllers');
const EnderecoUsuariosControllers = require('./controllers/EnderecoUsuariosControllers');
const ParceiroControllers = require('./controllers/ParceiroControllers');
const FormaPagamentoControllers = require('./controllers/FormaPagamentoControllers');
const HistoricoMovimentacaoControllers = require('./controllers/HistoricoMovimentacaoControllers');
const ClienteControllers = require('./controllers/ClienteControllers');
const ProdutoControllers = require('./controllers/ProdutoController');


const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', authMiddleware,UsuarioController.alterUser);
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.get('/usuarios/login' ,UsuarioController.login);
routes.post('/usuarios/logout', UsuarioController.logout);

routes.post('/enderecos', EnderecoUsuariosControllers.create);
routes.get('/enderecos', EnderecoUsuariosControllers.index);
routes.put('/enderecos/:id_endereco', EnderecoUsuariosControllers.alterEndereco);
routes.delete('/enderecos/:id_endereco', EnderecoUsuariosControllers.delete);

routes.post('/parceiro', ParceiroControllers.create );
routes.get('/parceiro',ParceiroControllers.index);
routes.put('/parceiro/:idParceiro',ParceiroControllers.alterParceiro);
routes.delete('/parceiro/:idParceiro',ParceiroControllers.delete);

routes.post('/produto', ProdutoControllers.create );
routes.get('/produto',ProdutoControllers.index);
routes.put('/produto/:idProduto',ProdutoControllers.alterProduto);
routes.delete('/produto/:idProduto',ProdutoControllers.delete);


routes.post('/clientes', ClienteControllers.create);
routes.put('/clientes', ClienteControllers.alterCliente);
routes.get('/clientes', ClienteControllers.indexCliente);

routes.post('/formaPagamento',FormaPagamentoControllers.create);
routes.get('/formaPagamento',FormaPagamentoControllers.index);
routes.put('/formaPagamento/:idFormaPagamento',FormaPagamentoControllers.alter);
routes.delete('/formaPagamento',FormaPagamentoControllers.delete);

routes.post('/historicoMovimentacao', HistoricoMovimentacaoControllers.create);

module.exports = routes;