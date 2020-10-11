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


        const userId = req.headers.userId;
        const { razaoSocial, cnpj, inscricaoEstadual, telefone } = req.body;



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

            const { idEndereco } = req.params;
            console.log(idEndereco)

            const { cep, rua, numero, complemento, bairro, cidade, uf, pais} = req.body;
            console.log(req.body)

            await knex('enderecos').update({ cep }).where({ idEndereco });
            await knex('enderecos').update({ rua }).where({ idEndereco });
            await knex('enderecos').update({ numero }).where({ idEndereco });
            await knex('enderecos').update({ complemento }).where({ idEndereco });
            await knex('enderecos').update({ bairro }).where({ idEndereco });
            await knex('enderecos').update({ cidade }).where({ idEndereco });
            await knex('enderecos').update({ uf }).where({ idEndereco });
            await knex('enderecos').update({ pais }).where({ idEndereco });



            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
}
