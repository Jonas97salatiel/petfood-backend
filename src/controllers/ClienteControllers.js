const knex = require('../database/index');
const imageProduto = require('../controllers/ImageControllers');

module.exports = {

    async index(req, res) {

        try {
            const results = await knex('cliente');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },

    async indexCliente(req, res) {

        const {idCliente}=req.params

        try {
            const results = await knex('cliente').where({idCliente});
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },

    async create(req, res, next) {

        const { userId, cpf, imagem } = req.body;

        console.log(req.body);

        try {
            await knex('cliente').insert({
                userId: userId,
                cpf: cpf,
                urlImage: 'null'
            });
        
        const urlImage =  await imageProduto.uploadImageCliente(imagem, userId);
        
        await knex('cliente')
            .where({ userId })
            .update({ urlImage:  urlImage});

            return res.status(200).json({ success: 'Cliente com sucesso.' });

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterCliente(req, res, next) {

        try {

            const {userId}=req.params
            console.log(userId)

            const { cpf } = req.body;
            console.log(req.body)

            await knex('clientes').update({ cpf }).where({ userId });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
}
