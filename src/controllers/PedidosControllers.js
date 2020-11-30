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
            next(error);
        }
    },

    async indexCliente(req, res, next) {

        const idCliente = req.params.idCliente;

        try {

            const results = await knex('pedidos')
            .join('parceiro', 'pedidos.idParceiro', '=', 'parceiro.idParceiro')
            .where({ idCliente });

            if (results.length === 0) {
                return res.status(200).json({});
            } else {
                return res.json(results);
            }

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async create(req, res, next) {

        const {

            valorPedidoCents,
            varCartao,
            cvv,
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

        for (let index = 0; index < ListaProdutos.length;) {

            var id = ListaProdutos[index].idProduto.toString();
            var title = ListaProdutos[index].nome;
            var unit_price = ListaProdutos[index].valor * 100;
            var quantity = ListaProdutos[index].qtd;
            var tangible = true;

            items.push({ id, title, unit_price, quantity, tangible })
            index++
        }

        let listaProdutos = req.body.ListaProdutos;

        try {

            const datePagamentos = {
                "amount": valorPedidoCents,
                "card_number": varCartao,
                "card_cvv": cvv,
                "card_expiration_date": validadeExprt,
                "card_holder_name": nometitular,
                "customer": {
                    "external_id": "#3311",
                    "name": nometitular,
                    "type": "individual",
                    "country": "br",
                    "email": email,
                    "documents": [
                        {
                            "type": "cpf",
                            "number": cpf
                        }
                    ],
                    "phone_numbers": ["+0556132061700"],
                    "birthday": "2000-01-01"
                },
                "billing": {
                    "name": nomeUsuario,
                    "address": {
                        "country": "br",
                        "state": uf,
                        "city": cidade,
                        "neighborhood": bairro,
                        "street": rua,
                        "street_number": numeroRua,
                        "zipcode": '72020550'
                    }
                },
                "shipping": {
                    "name": nomeParceiro,
                    "fee": 0000,
                    "delivery_date": currentDate,
                    "expedited": true,
                    "address": {
                        "country": "br",
                        "state": ufParceiro,
                        "city": cidadeParceiro,
                        "neighborhood": bairroParceiro,
                        "street": ruaParceiro,
                        "street_number": numeroRuaParceiro,
                        "zipcode": '72020550'
                    }
                },
                "items": items
            }

         const response = await pagarme.client.connect({ api_key: 'ak_test_82qgXOppwHF79yNxfhXHTIty2rMqcE' })
                .then(client => client.transactions.create(datePagamentos))
                .catch(function(error){
                    console.log(error.response);
                   
                })
        
        console.log(response);


            await knex('pedidos').insert({

                valorPedido: valorPedido,
                status: status,
                numeroTransacao: response.nsu,
                idCliente: idCliente,
                idFormaPagamento: idFormaPagamento,
                idCuponsDesconto: idCuponsDesconto,
                idParceiro: idParceiro

            });

            const idPedidos = await knex('pedidos').where({ numeroTransacao: numeroTransacao }).select('idPedidos');
            console.log(idPedidos);

            for (let index = 0; index < listaProdutos.length;) {

                const { idProduto, qtd } = listaProdutos[index];

                await knex('pedidos_produtos').insert({
                    quantidade: qtd,
                    idPedidos: idPedidos[0].idPedidos,
                    idProduto: idProduto
                })

                index++
            }

            return res.status(200).json({ success: 'Pedido cadastrado com sucesso!' })

        } catch (error) {
            console.log(error);
        }

    }

}