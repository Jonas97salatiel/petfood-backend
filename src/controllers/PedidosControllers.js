const knex = require('../database/index');

module.exports = {

    async index(req, res, next){

        try {
            
            const results = await knex('pedidos');
            return res.json(results);

        } catch (error) {
            console.log(error);
        }
    },

    async create(req, res, next){

        const {valorPedido, status, numeroTransacao, idCliente, idFormaPagamento, idCuponsDesconto} = req.body;
        console.log(req.body);

        let listaProdutos = req.body.ListaProdutos;

        console.log(listaProdutos);

       try {
            
            const {idPedidos} = await knex('pedidos').insert({
                
                valorPedido: valorPedido,
                status: status,
                numeroTransacao: numeroTransacao,
                idCliente: idCliente,
                idFormaPagamento: idFormaPagamento,
                idCuponsDesconto: idCuponsDesconto

             });
            
             for (let index = 0; index < listaProdutos.length;) {
                 
                const {idProduto, qtd} = listaProdutos[index];

                await knex('pedidos_produtos').insert({
                    qtd: qtd,
                    idPedidos: idPedidos,
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