const knex = require('../database/index');
const pagarme = require('pagarme');


module.exports = {

    async index(req, res, next) {

        const idParceiro = req.params.idParceiro;

        try {

            const results = await knex('pedidos').where({ idParceiro });

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

    async create(req, res, next) {


        let listaProdutos = req.body.ListaProdutos;

        console.log(req.body);
        console.log(listaProdutos);

         try {

        //     await knex('pedidos').insert({

        //         valorPedido: valorPedido,
        //         status: status,
        //         numeroTransacao: numeroTransacao,
        //         idCliente: idCliente,
        //         idFormaPagamento: idFormaPagamento,
        //         idCuponsDesconto: idCuponsDesconto,
        //         idParceiro: idParceiro

        //     });

        //     const idPedidos = await knex('pedidos').where({ numeroTransacao: numeroTransacao }).select('idPedidos');
        //     console.log(idPedidos);
            
        //     for (let index = 0; index < listaProdutos.length;) {

        //         const { idProduto, qtd } = listaProdutos[index];

        //         await knex('pedidos_produtos').insert({
        //             quantidade: qtd,
        //             idPedidos: idPedidos[0].idPedidos,
        //             idProduto: idProduto
        //         })

        //         index++
        //     }

            // pagarme.client.connect({ api_key: 'ak_test_82qgXOppwHF79yNxfhXHTIty2rMqcE' })
            //     .then(client => client.transactions.create({
            //         "amount": 21000,
            //         "card_number": "4111111111111111",
            //         "card_cvv": "123",
            //         "card_expiration_date": "0922",
            //         "card_holder_name": "Morpheus Fishburne",
            //         "customer": {
            //             "external_id": "#3311",
            //             "name": "Morpheus Fishburne",
            //             "type": "individual",
            //             "country": "br",
            //             "email": "mopheus@nabucodonozor.com",
            //             "documents": [
            //                 {
            //                     "type": "cpf",
            //                     "number": "30621143049"
            //                 }
            //             ],
            //             "phone_numbers": ["+5511999998888", "+5511888889999"],
            //             "birthday": "1965-01-01"
            //         },
            //         "billing": {
            //             "name": "Trinity Moss",
            //             "address": {
            //                 "country": "br",
            //                 "state": "sp",
            //                 "city": "Cotia",
            //                 "neighborhood": "Rio Cotia",
            //                 "street": "Rua Matrix",
            //                 "street_number": "9999",
            //                 "zipcode": "06714360"
            //             }
            //         },
            //         "shipping": {
            //             "name": "Neo Reeves",
            //             "fee": 1000,
            //             "delivery_date": "2000-12-21",
            //             "expedited": true,
            //             "address": {
            //                 "country": "br",
            //                 "state": "sp",
            //                 "city": "Cotia",
            //                 "neighborhood": "Rio Cotia",
            //                 "street": "Rua Matrix",
            //                 "street_number": "9999",
            //                 "zipcode": "06714360"
            //             }
            //         },
            //         "items": [
            //             {
            //                 "id": "r123",
            //                 "title": "Red pill",
            //                 "unit_price": 10000,
            //                 "quantity": 1,
            //                 "tangible": true
            //             },
            //             {
            //                 "id": "b123",
            //                 "title": "Blue pill",
            //                 "unit_price": 10000,
            //                 "quantity": 1,
            //                 "tangible": true
            //             }
            //         ]
            //     }))
            //     .then(transaction => console.log(transaction))

            return res.status(200).json({ success: 'Pedido cadastrado com sucesso!' })

        } catch (error) {
            console.log(error);
        }

    }

}