const express = require('express');

const authMiddleware = require('./middlewares/auth')

const UsuarioController = require('./controllers/UsuarioControllers');
const EnderecoUsuariosControllers = require('./controllers/EnderecoUsuariosControllers');
const ParceiroControllers = require('./controllers/ParceiroControllers');
const FormaPagamentoControllers = require('./controllers/FormaPagamentoControllers');
const HistoricoMovimentacaoControllers = require('./controllers/HistoricoMovimentacaoControllers');
const ClienteControllers = require('./controllers/ClienteControllers');
const MarcaControllers = require('./controllers/MarcaControllers');
const CategoriaControllers = require('./controllers/CategoriaControllers');
const ProdutoControllers = require('./controllers/ProdutoController');
const CuponsControllers = require('./controllers/CuponsControllers');
const TipoMovimentacaoControllers = require('./controllers/TipoMovimentacaoControllers');








const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', authMiddleware,UsuarioController.alterUser);
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.get('/usuarios/login' ,UsuarioController.login);
routes.post('/usuarios/logout', UsuarioController.logout);

routes.post('/enderecos/:userId', EnderecoUsuariosControllers.create);
routes.get('/enderecos', EnderecoUsuariosControllers.index);
routes.put('/enderecos/:id_endereco', EnderecoUsuariosControllers.alterEndereco);
routes.delete('/enderecos/:id_endereco', EnderecoUsuariosControllers.delete);

routes.post('/parceiro', ParceiroControllers.create );
<<<<<<< HEAD
routes.get('/parceiro',ParceiroControllers.index);
routes.put('/parceiro/:idParceiro',ParceiroControllers.alterParceiro);
routes.delete('/parceiro/:idParceiro',ParceiroControllers.delete);

routes.post('/produto', ProdutoControllers.create );
routes.get('/produto',ProdutoControllers.index);
routes.put('/produto/:idProduto',ProdutoControllers.alterProduto);
routes.delete('/produto/:idProduto',ProdutoControllers.delete);
=======
routes.get('/parceiro', ParceiroControllers.index );
routes.put('/parceiro/:idParceiro', ParceiroControllers.alterParceiro);
routes.put('/parceiro/:idParceiro', ParceiroControllers.delete);
>>>>>>> 9c074f95862a05549a18c6579e3dc63e991de61a


routes.post('/clientes', ClienteControllers.create);
routes.put('/clientes', ClienteControllers.alterCliente);
routes.get('/clientes', ClienteControllers.indexCliente);


routes.post('/marca', MarcaControllers.create);
routes.put('/marca/:idMarca', MarcaControllers.alterMarca);
routes.get('/marca', MarcaControllers.index);
routes.delete('/marca/:idMarca', MarcaControllers.delete);


routes.post('/categoria', CategoriaControllers.create);
routes.put('/categoria/:idCategoria', CategoriaControllers.alterCategoria);
routes.get('/categoria', CategoriaControllers.index);
routes.delete('/categoria/:idCategoria', CategoriaControllers.delete);

routes.post('/cupons', CuponsControllers.create);
routes.put('/cupons/:idCuponsDesconto', CuponsControllers.alterCupons);
routes.get('/cupons', CuponsControllers.index);
routes.delete('/cupons/:idCuponsDesconto', CuponsControllers.delete);

routes.post('/TipoMovimentacao', TipoMovimentacaoControllers.create);
routes.put('/TipoMovimentacao/:idTipoMovimentacao', TipoMovimentacaoControllers.alterMovimentacao);
routes.get('/TipoMovimentacao', TipoMovimentacaoControllers.index);
routes.delete('/TipoMovimentacao/:idTipoMovimentacao', TipoMovimentacaoControllers.delete);


routes.post('/formaPagamento',FormaPagamentoControllers.create);
routes.get('/formaPagamento',FormaPagamentoControllers.index);
routes.put('/formaPagamento/:idFormaPagamento',FormaPagamentoControllers.alter);
routes.delete('/formaPagamento',FormaPagamentoControllers.delete);

routes.post('/historicoMovimentacao', HistoricoMovimentacaoControllers.create);

module.exports = routes;