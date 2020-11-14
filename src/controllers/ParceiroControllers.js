const knex = require('../database/index');
const imageProduto = require('../controllers/ImageControllers');

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
        const { razaoSocial, cnpj, inscricaoEstadual, telefone, userId, imagem } = req.body;

        try {
            await knex('parceiro').insert({
                razaoSocial: razaoSocial,
                cnpj: cnpj,
                inscricaoEstadual: inscricaoEstadual,
                telefone: telefone,
                userId: userId
            });

            const urlImage =  await imageProduto.uploadImageLogoParceiro(imagem, userId);

            await knex('parceiro')
            .where({ userId })
            .update({ urlImage:  urlImage});

            return res.status(200).json({ success: 'Parceiro criado com sucesso!'});

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterParceiro(req, res, next) {

        try {

            const { idParceiro } = req.params;
            console.log(idParceiro)

            const { razaoSocial, cnpj, inscricaoEstadual, telefone, userId, imagem } = req.body;
            console.log(req.body)

            await knex('parceiro').update({ razaoSocial }).where({ idParceiro });
            await knex('parceiro').update({ cnpj }).where({ idParceiro });
            await knex('parceiro').update({ inscricaoEstadual }).where({ idParceiro });
            await knex('parceiro').update({ telefone }).where({ idParceiro });
            await knex('parceiro').update({ userId }).where({ idParceiro });
            
            const urlImage =  await imageProduto.uploadImageLogoParceiro(imagem, userId);

            await knex('parceiro').where({ userId }).update({ urlImage:  urlImage});

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
        } catch (error) {
            next(error)
        }
    }
}
