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

        try {
            
            let {idPedidos} = await knex('pedidos').insert({
                
                valorPedido: valorPedido,
                status: status,
                numeroTransacao: numeroTransacao,
                idCliente: idCliente,
                idFormaPagamento: idFormaPagamento,
                idCuponsDesconto: idCuponsDesconto

            })

        } catch (error) {
            console.log(error);
        }

    }

    



}