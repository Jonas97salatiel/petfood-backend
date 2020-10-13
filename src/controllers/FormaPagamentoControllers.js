const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('formaPagamento');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {
        const { formaPagamento, descricao, parcelas} = req.body;
        console.log(req.body);

        let consultFPgmt = knex('formaPagamento').where(descricao);


        if (consultFPgmt[0].formaPagamento === formaPagamento && consultFPgmt[0].parcelas === parcelas ) {

            return res.status(409).json({ warning: 'E-mail já está sendo utilizado!.'});
            
        }else{
            try {
            
                await knex('formaPagamento').insert({
                    formaPagamento: formaPagamento,
                    descricao: descricao,
                    parcelas: parcelas
                    
                });
    
                return res.status(200).json({ success: 'Forma de pagamento criado com sucesso!.'});
    
            } catch (error) {
                console.log(error);
                next(error);
            }
        }

    },

    async alter(req, res, next) {

        try {

            const { idFormaPgto } = req.params;
            console.log(idFormaPgto)

            const { formaPgto, descricao, parcelas} = req.body;
            console.log(req.body)

            await knex('formaPagamento').update({ formaPgto }).where({ idFormaPgto });
            await knex('formaPagamento').update({ descricao }).where({ idFormaPgto });
            await knex('formaPagamento').update({ parcelas }).where({ idFormaPgto });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    async delete(req,res,next){
        try{
            const {idFormaPgto}=req.params

            await knex('formaPagamento')
            .where({idFormaPgto})
            .del()

            return res.send()
        }catch(error){
            next(error)
        }
    }


}
