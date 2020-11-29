const knex = require('../database/index');
const imageProduto = require('../controllers/ImageControllers');

module.exports = {

    async index(req, res) {

        try {
            const results = await knex('clientes');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },

    async indexCliente(req, res) {

        const {userId}=req.params.userId

        try {
            const results = await knex('clientes').where({userId})
            .join('enderecos', 'clientes.userId', '=', 'enderecos.userId');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },

    async create(req, res, next) {

        const { userId, cpf, nome, imageBase64 } = req.body;

        console.log(req.body);

        try {
            await knex('clientes').insert({
                userId: userId,
                cpf: cpf,
                nome: nome,
                urlImage: 'null'
            });

    
            const urlImage =  await imageProduto.uploadImageCliente(imageBase64, userId);
        
            await knex('clientes')
                .where({ userId })
                .update({ urlImage:  urlImage});    
        
        

            return res.status(200).json({ success: 'Cliente cadastrado com sucesso.' });

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
