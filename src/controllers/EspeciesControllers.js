const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('especie');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {

        const { descricao} = req.body;

        console.log(req.body);

        try {
            await knex('especie').insert({
                descricao: descricao,
                
            });

            return res.status(200).json({ success: 'Especie criada com sucesso.' });

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alter(req, res, next) {

        try {

            const {idEspecie}=req.params
            console.log(idEspecie)

            const { descricao } = req.body;

            console.log(req.body)

            await knex('especie').update({ descricao }).where({ idEspecie });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },

    async delete(req,res,next){
        try{
            const {idEspecie}=req.params

            await knex('especie')
            .where({idEspecie})
            .del()

            return res.send()
        }catch(error){
            next(error)
        }
    }
}
