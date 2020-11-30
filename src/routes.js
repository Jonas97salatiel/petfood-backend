const express = require('express');

const authMiddleware = require('./middlewares/auth')

const UsuarioController = require('./controllers/UsuarioControllers');
const EnderecoUsuariosControllers = require('./controllers/EnderecoUsuariosControllers');
const ParceiroControllers = require('./controllers/ParceiroControllers');
const FormaPagamentoControllers = require('./controllers/FormaPagamentoControllers');
const HistoricoMovimentacaoControllers = require('./controllers/HistoricoMovimentacaoControllers');
const ClienteControllers = require('./controllers/ClienteControllers');
const MarcaControllers = require('./controllers/MarcaControllers');
const EspecieControllers = require('./controllers/EspeciesControllers');
const CategoriaControllers = require('./controllers/CategoriaControllers');
const ProdutoControllers = require('./controllers/ProdutoControllers');
const CuponsControllers = require('./controllers/CuponsControllers');
const TipoMovimentacaoControllers = require('./controllers/TipoMovimentacaoControllers');
const CarrinhoComprasControllers = require('./controllers/CarrinhoComprasControllers');
const ProdutosControllers = require('./controllers/ProdutoControllers');
const PedidosControllers = require('./controllers/PedidosControllers');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', authMiddleware,UsuarioController.alterUser);
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.post('/usuariosLogin' ,UsuarioController.login);
routes.post('/usuarios/logout', UsuarioController.logout);
routes.get('/usuarios/:email', UsuarioController.indexEmail);

routes.post('/enderecos', EnderecoUsuariosControllers.create);
routes.get('/enderecos/:userId', EnderecoUsuariosControllers.indexUser);
routes.get('/enderecos', EnderecoUsuariosControllers.index);
routes.put('/enderecos/:idEndereco', EnderecoUsuariosControllers.alterEndereco);
routes.delete('/enderecos/:idEndereco', EnderecoUsuariosControllers.delete);

routes.post('/produto', ProdutosControllers.create );
routes.get('/produto', ProdutosControllers.index );
routes.put('/produto/:idProduto', ProdutosControllers.alterProduto);
routes.delete('/produto/:idProduto', ProdutosControllers.delete);
routes.get('/produto/:idProduto', ProdutoControllers.consultaProduto);
routes.get('/produto/parceiro/:idParceiro', ProdutoControllers.indexProdutosParceiro);
 
routes.post('/parceiro', ParceiroControllers.create );
routes.get('/parceiro',ParceiroControllers.index);
routes.get('/parceiro/:cnpj',ParceiroControllers.indexParceiro);
routes.put('/parceiro/:idParceiro',ParceiroControllers.alterParceiro);
routes.delete('/parceiro/:idParceiro',ParceiroControllers.delete);

routes.post('/produto', ProdutoControllers.create );
routes.get('/produto',ProdutoControllers.index);
routes.put('/produto/:idProduto',ProdutoControllers.alterProduto);
routes.delete('/produto/:idProdu to',ProdutoControllers.delete);

routes.post('/pedido', PedidosControllers.create);
routes.get('/pedido/:idParceiro', PedidosControllers.index);
routes.get('/pedido/cliente/:idCliente', PedidosControllers.indexCliente);

routes.post('/clientes', ClienteControllers.create);
routes.put('/clientes', ClienteControllers.alterCliente);
routes.get('/clientes/:userId', ClienteControllers.indexCliente);
routes.get('/clientes', ClienteControllers.index);

routes.post('/marca', MarcaControllers.create);
routes.put('/marca/:idMarca', MarcaControllers.alterMarca);
routes.get('/marca', MarcaControllers.index);
routes.delete('/marca/:idMarca', MarcaControllers.delete);

routes.post('/especie', EspecieControllers.create);
routes.put('/especie/:idEspecie', EspecieControllers.alter);
routes.get('/especie', EspecieControllers.index);
routes.delete('/especie/:idEspecie', EspecieControllers.delete);

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

routes.post('/carrinhoCompras',CarrinhoComprasControllers.create);
routes.get('/carrinhoCompras',CarrinhoComprasControllers.index);
routes.delete('/carrinhoCompras',CarrinhoComprasControllers.delete);

routes.post('/historicoMovimentacao', HistoricoMovimentacaoControllers.create);

module.exports = routes;