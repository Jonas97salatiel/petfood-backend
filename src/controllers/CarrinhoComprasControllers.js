const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('carrinhoCompras');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        //const userId = req.headers.userId;
        const { valorTotal,idProdutos} = req.body;

        

        console.log(req.body);

        try {
            await knex('carrinhoCompras').insert({
               
                valorTotal: valorTotal,
                idProdutos: idProdutos
                
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alter(req, res, next) {

        try {

            const { idCarrinhoCompras } = req.params;

            const { valorTotal, idProdutos} = req.body;
            console.log(req.body)

            await knex('carrinhoCompras').update({ valorTotal }).where({ idCarrinhoCompras });
            await knex('carrinhoCompras').update({ idProdutos }).where({ idCarrinhoCompras });

            

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req, res, next) {
        try {
            const { idCarrinhoCompras } = req.params

            await knex('carrinhoCompras')
                .where({ idCarrinhoCompras })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }

}
