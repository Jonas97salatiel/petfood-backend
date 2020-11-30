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

        const {

            valorPedidoCents,
            varCartao,
            validadeExprt,
            nometitular,
            idCliente,
            status,
            numeroTransacao,
            email,
            telefone,
            cpf,
            nomeUsuario,
            uf,
            cidade,
            bairro,
            rua,
            numeroRua,
            cep,
            nomeParceiro,
            currentDate,
            ufParceiro,
            cidadeParceiro,
            bairroParceiro,
            ruaParceiro,
            numeroRuaParceiro,
            cepParceiro,
            idFormaPagamento,
            idCuponsDesconto,
            idParceiro,
            ListaProdutos

        } = req.body;

        var items = [];

        for (let index = 0; index < ListaProdutos.length; ) {
            
            var id = ListaProdutos[index].idProduto;
            var title = ListaProdutos[index].nome;
            var unit_price = ListaProdutos[index].valor * 100;
            var quantity = ListaProdutos[index].qtd;
            var tangible = true;                                   
            
            items.push({id, title, unit_price, quantity, tangible})
            index++
        }



        let listaProdutos = req.body.ListaProdutos;

        console.log(listaProdutos);

        console.log(items);

         try {

            // await knex('pedidos').insert({

            //     valorPedido: valorPedido,
            //     status: status,
            //     numeroTransacao: numeroTransacao,
            //     idCliente: idCliente,
            //     idFormaPagamento: idFormaPagamento,
            //     idCuponsDesconto: idCuponsDesconto,
            //     idParceiro: idParceiro

            // });

            // const idPedidos = await knex('pedidos').where({ numeroTransacao: numeroTransacao }).select('idPedidos');
            // console.log(idPedidos);
            
            // for (let index = 0; index < listaProdutos.length;) {

            //     const { idProduto, qtd } = listaProdutos[index];

            //     await knex('pedidos_produtos').insert({
            //         quantidade: qtd,
            //         idPedidos: idPedidos[0].idPedidos,
            //         idProduto: idProduto
            //     })

            //     index++
            // }

            // pagarme.client.connect({ api_key: 'ak_test_82qgXOppwHF79yNxfhXHTIty2rMqcE' })
            //     .then(client => client.transactions.create({
            //         "amount": 21000,
            //         "card_number": valorPedidoCents,
            //         "card_cvv": varCartao,
            //         "card_expiration_date": validadeExprt,
            //         "card_holder_name": nometitular,
            //         "customer": {
            //             "external_id": "#3311",
            //             "name": nometitular,
            //             "type": "individual",
            //             "country": "br",
            //             "email": email,
            //             "documents": [
            //                 {
            //                     "type": "cpf",
            //                     "number": cpf
            //                 }
            //             ],
            //             "phone_numbers": [telefone],
            //             "birthday": "2000-01-01"
            //         },
            //         "billing": {
            //             "name": nomeUsuario,
            //             "address": {
            //                 "country": "br",
            //                 "state": uf,
            //                 "city": cidade,
            //                 "neighborhood": bairro,
            //                 "street": rua,
            //                 "street_number": numeroRua,
            //                 "zipcode": cep
            //             }
            //         },
            //         "shipping": {
            //             "name": nomeParceiro,
            //             "fee": 0000,
            //             "delivery_date": currentDate,
            //             "expedited": true,
            //             "address": {
            //                 "country": "br",
            //                 "state": ufParceiro,
            //                 "city": cidadeParceiro,
            //                 "neighborhood": bairroParceiro,
            //                 "street": ruaParceiro,
            //                 "street_number": numeroRuaParceiro,
            //                 "zipcode": cepParceiro
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