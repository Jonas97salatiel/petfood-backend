const knex = require('../database/index');

const cryptography = require('./Cryptography');

const jwt = require('jsonwebtoken');

require("dotenv-safe").config();

module.exports = {

    async index(req, res){

        try {

            const results = await knex('pedidos');
            return res.json(results);

        } catch (error) {
            console.log(error);
        }
    },


    async create(req, res, next){
        const { nomeCliente, valorPedido, idCliente, idFormaPagamento, idEndereco } = req.body;
        
        console.log(req.body);
          
            try {
                
                
                let {idPedidos} = await knex('pedidos').insert({
                    nomeCliente:nomeCliente,
                    valorPedido:valorPedido,
                    idCliente:idCliente,
                    idFormaPagamento:idFormaPagamento,
                    idEndereco: idEndereco
                  });

                  console.log(req.body);
                  return res.status(200).json({idPedidos, success: 'Pedido realizado com sucesso!.'});
              } catch (error) {
                  console.log(error);
                  next(error);
              }
    },

    async cancelarPedido(req, res, next){
        



    }   
} //Fim os metodos desse objeto      