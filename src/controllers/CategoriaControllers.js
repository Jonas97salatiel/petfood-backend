const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('categorias');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        //const userId = req.headers.userId;
        const { descricaoCategoria} = req.body;

        

        console.log(req.body);

        try {
            await knex('categorias').insert({
                descricaoCategoria: descricaoCategoria,
                
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterCategoria(req, res, next) {

        try {

            const { idCategoria } = req.params;

            const { descricaoCategoria} = req.body;
            console.log(req.body)

            await knex('categorias').update({ descricaoCategoria }).where({ idCategoria });
            

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req, res, next) {
        try {
            const { idCategoria } = req.params

            await knex('categorias')
                .where({ idCategoria })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }

}
