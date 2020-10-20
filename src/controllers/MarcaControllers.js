const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('marca');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {

        const { descricaoMarca} = req.body;

        console.log(req.body);

        try {
            await knex('marca').insert({
                descricaoMarca: descricaoMarca,
                
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterMarca(req, res, next) {

        try {

            const {idMarca}=req.params
            console.log(idMarca)

            const { descricaoMarca } = req.body;

            console.log(req.body)

            await knex('marca').update({ descricaoMarca }).where({ idMarca });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },

    async delete(req,res,next){
        try{
            const {idMarca}=req.params

            await knex('marca')
            .where({idMarca})
            .del()

            return res.send()
        }catch(error){
            next(error)
        }
    }
}
