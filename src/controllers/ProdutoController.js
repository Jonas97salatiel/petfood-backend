const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('produtos');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        //const idParceiro = req.headers.idParceiro;
        const { descricaoProduto, valor, qtdEstoque, medida,peso, status, idParceiro } = req.body;


        console.log(req.body);

        try {
            await knex('produtos').insert({
                descricaoProduto: descricaoProduto,
                valor: valor,
                qtdEstoque: qtdEstoque,
                medida: medida,
                peso: peso,
                status: status,
                idParceiro: idParceiro
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterProduto(req, res, next) {

        try {

            const { idProduto } = req.params;
            

            const { descricaoProduto, valor, qtdEstoque, medida,peso, status, idParceiro } = req.body;
            console.log(req.body)

            await knex('produtos').update({ descricaoProduto }).where({ idProduto });
            await knex('produtos').update({ valor }).where({ idProduto });
            await knex('produtos').update({ qtdEstoque }).where({ idProduto });
            await knex('produtos').update({ medida }).where({ idProduto });
            await knex('produtos').update({ peso }).where({ idProduto });
            await knex('produtos').update({ status }).where({ idProduto });
            await knex('produtos').update({ idParceiro }).where({ idProduto });
         
            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req, res, next) {
        try {
            const { idProduto } = req.params

            await knex('produtos')
                .where({ idProduto })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }

}