const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('formaPagamento');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        
        const { formaPgto, descricao} = req.body;



        console.log(req.body);

        try {
            await knex('formaPagamento').insert({
                formaPgto: formaPgto,
                descricao: descricao,
                
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterParceiro(req, res, next) {

        try {

            const { idFormaPgto } = req.params;
            console.log(idFormaPgto)

            const { formaPgto, descricao} = req.body;
            console.log(req.body)

            await knex('formaPagamento').update({ formaPgto }).where({ idFormaPgto });
            await knex('formaPagamento').update({ descricao }).where({ idFormaPgto });
            



            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
}
