const knex = require('../database/index');


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

        const {idUsuario}=req.params

        try {
            const results = await knex('cliente').where({idUsuario});
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },

    async create(req, res, next) {

        const { idUsuario, cpf } = req.body;

        console.log(req.body);

        try {
            await knex('cliente').insert({
                idUsuario: idUsuario,
                cpf: cpf
            });

            return res.json(200) + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterCliente(req, res, next) {

        try {

            const {idUsuario}=req.params
            console.log(idUsuario)

            const { cpf } = req.body;
            console.log(req.body)

            await knex('clientes').update({ cpf }).where({ idUsuario });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
}
