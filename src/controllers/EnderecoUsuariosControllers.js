const knex = require('../database/index');


module.exports = {

    async index(req, res){
        const results = await knex('enderecos');
        const user_id = req.headers.authorization;

        const query = knex('enderecos');

        if (user_id){
            query.where({user_id});
        }

        const results = await query;

        return res.json(results);
    },


    async create(req, res, next){
        
        const { cep, rua, numero, complemento, bairro, cidade, uf, pais} = req.body;
        console.log(req.body);
        
        
        try {
            await knex('enderecos').insert({
                cep, 
                rua, 
                numero, 
                complemento, 
                bairro, 
                cidade, 
                uf, 
                pais,
            })
            return res.json({id});
        } catch (error) {
            next(error)
        } 
    }


}