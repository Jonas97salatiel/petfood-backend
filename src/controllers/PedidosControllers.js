const knex = require('../database/index');

module.exports = {

    async index(req, res, next){

        const idParceiro = req.params.idParceiro;
        
        try {
            
            const results = await knex('pedidos').where({idParceiro});
            
            console.log(results);

            if (results.length === 0) {
                return res.status(200).json({});
            } else {
                return res.json(results);
            }       
  
        } catch (error) {
            console.log(error);
        }
    },

    async create(req, res, next){

        const {valorPedido, status, numeroTransacao, idCliente, idFormaPagamento, idCuponsDesconto, idParceiro} = req.body;

        let listaProdutos = req.body.ListaProdutos;

        console.log(req.body);
        console.log(listaProdutos);

       try {
            
            await knex('pedidos').insert({
                
                valorPedido: valorPedido,
                status: status,
                numeroTransacao: numeroTransacao,
                idCliente: idCliente,
                idFormaPagamento: idFormaPagamento,
                idCuponsDesconto: idCuponsDesconto,
                idParceiro: idParceiro

             });

             const idPedidos = await knex('pedidos').where({numeroTransacao: numeroTransacao}).select('idPedidos');
            console.log(idPedidos);
             for (let index = 0; index < listaProdutos.length;) {
                 
                const {idProduto, qtd} = listaProdutos[index];

                await knex('pedidos_produtos').insert({
                    quantidade: qtd,
                    idPedidos: idPedidos.idPedidos,
                    idProduto:idProduto
                })

                index++
             }

            return res.status(200).json({success: 'Pedido cadastrado com sucesso!'})

        } catch (error) {
            console.log(error);
        }

    }

}