const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('parceiro');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        //const userId = req.headers.userId;
        const { razaoSocial, cnpj, inscricaoEstadual, telefone, userId } = req.body;

        console.log(userId);

        console.log(req.body);

        try {
            await knex('parceiro').insert({
                razaoSocial: razaoSocial,
                cnpj: cnpj,
                inscricaoEstadual: inscricaoEstadual,
                telefone: telefone,
                userId: userId
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterParceiro(req, res, next) {

        try {

            const { idParceiro } = req.params;
            console.log(idParceiro)

            const { razaoSocial, cnpj, inscricaoEstadual, telefone, userId } = req.body;
            console.log(req.body)

            await knex('parceiro').update({ razaoSocial }).where({ idParceiro });
            await knex('parceiro').update({ cnpj }).where({ idParceiro });
            await knex('parceiro').update({ inscricaoEstadual }).where({ idParceiro });
            await knex('parceiro').update({ telefone }).where({ idParceiro });
            await knex('parceiro').update({ userId }).where({ idParceiro });
            



            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },

    
    async delete(req,res,next){
        try{
            const {idParceiro}=req.params

            await knex('parceiro')
            .where({idParceiro})
            .del()

            return res.send()
        }catch(error){
            next(error)
        }
    }

}
