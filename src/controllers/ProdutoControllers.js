const knex = require('../database/index');

module.exports = {

    async create(req, res, next){

        const idParceiro = req.headers.idParceiro;

        const {descricaoProduto, valor, qtdEstoque, medida, peso, idStatus} = req.body;

        let descProd = knex('produtos').where('descricaoProduto',descricaoProduto, 'idParceiro', idParceiro );

        if(descProd.lenght === 1){

            return res.status(409).json({ warning: 'Já existe um produto com essa descrição cadastrado'});

        }else{

            try {
                
                let {idProduto} = knex(produtos).insert({
                    descricaoProduto: descricaoProduto,
                    valor: valor,
                    qtdEstoque: qtdEstoque,
                    medida: medida,
                    peso: peso,
                    idStatus: idStatus,
                    idParceiro: idParceiro,
                })

                return res.status(200).json({idProduto, success: 'Produto cadastrado com sucesso!.'});    

            } catch (error) {
                console.log(error);
                next(error);
            }
        }
    }


}