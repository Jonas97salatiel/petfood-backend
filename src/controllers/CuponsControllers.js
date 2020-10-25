const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('cupons_desconto');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {


        //const userId = req.headers.userId;
        const { descCupom, dataValidade, status, valor, tipoCupom } = req.body;


        console.log(req.body);

        try {
            await knex('cupons_desconto').insert({
                descCupom: descCupom,
                dataValidade: dataValidade,
                status: status,
                valor: valor,
                
            });

            return res.json() + console.log("Objeto cadastrado");

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterCupons(req, res, next) {

        try {

            const { idCuponsDesconto } = req.params;

            const { descCupom, dataValidade, status, valor } = req.body;
            console.log(req.body)

            await knex('cupons_desconto').update({ descCupom }).where({ idCuponsDesconto });
            await knex('cupons_desconto').update({ dataValidade }).where({ idCuponsDesconto });
            await knex('cupons_desconto').update({ status }).where({ idCuponsDesconto });
            await knex('cupons_desconto').update({ valor }).where({ idCuponsDesconto });




            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req, res, next) {
        try {
            const { idCuponsDesconto } = req.params

            await knex('cupons_desconto')
                .where({ idCuponsDesconto })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }

}
