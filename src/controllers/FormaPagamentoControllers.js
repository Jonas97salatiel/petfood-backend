const knex = require('../database/index');


module.exports = {

    async index(req, res) {

        try {
            const results = await knex('forma_pagamentos');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {
        const { formaPagamento, descricao, parcelas} = req.body;
        
        console.log(req.body);

        const consultFPgmt = await knex('forma_pagamentos').where({descricao, parcelas});

        console.log(consultFPgmt.length);

        if ( consultFPgmt.length > 0) {

            return res.status(409).json({ warning: 'Forma de pagamento já cadastrada!'});
            
        }else{
            try {
            
                await knex('forma_pagamentos').insert({
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

            const {idFormaPagamento} = req.params;
            console.log(idFormaPagamento)
            const { formaPagamento, descricao, parcelas} = req.body;
            console.log(req.body)

            await knex('forma_pagamentos')
                .update({ formaPagamento,  descricao, parcelas})
                .where({ idFormaPagamento });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    async delete(req,res,next){
        try{
            const {idFormaPagamento}=req.params

            await knex('forma_pagamentos')
            .where({idFormaPgto})
            .del()

            return res.send()
        }catch(error){
            next(error)
        }
    }
}
