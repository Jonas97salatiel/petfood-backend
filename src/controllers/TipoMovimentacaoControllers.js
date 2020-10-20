const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('tipo_movimentacao');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        //const userId = req.headers.userId;
        const { descTipoMovimentacao, tipoMovimentacao, dataMovimentacao } = req.body;

    

        console.log(req.body);

        try {
            await knex('tipo_movimentacao').insert({
                descTipoMovimentacao: descTipoMovimentacao,
                tipoMovimentacao: tipoMovimentacao,
                dataMovimentacao: dataMovimentacao,
                
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterMovimentacao(req, res, next) {

        try {

            const { idTipoMovimentacao } = req.params;

            const { descTipoMovimentacao, tipoMovimentacao, dataMovimentacao} = req.body;
            console.log(req.body)

            await knex('tipo_movimentacao').update({ descTipoMovimentacao }).where({ idTipoMovimentacao });
            await knex('tipo_movimentacao').update({ tipoMovimentacao }).where({ idTipoMovimentacao });
            await knex('tipo_movimentacao').update({ dataMovimentacao }).where({ idTipoMovimentacao });
            




            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req, res, next) {
        try {
            const { idTipoMovimentacao } = req.params

            await knex('tipo_movimentacao')
                .where({ idTipoMovimentacao })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }

}
