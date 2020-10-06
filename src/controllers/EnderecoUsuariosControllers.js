const knex = require('../database/index');


module.exports = {

    async index(req, res){

        try {
            const results = await knex('enderecos');
            return res.json(results);            
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next){
        
        const { cep, rua, numero, complemento, bairro, cidade, uf, pais} = req.body;
        const user_id = req.headers.user_id;
        

        console.log(req.body);
        
        try {
           await knex('enderecos').insert({
                cep: cep, 
                rua: rua, 
                numero: numero, 
                complemento: complemento, 
                bairro: bairro, 
                cidade: cidade, 
                uf: uf, 
                pais: pais,
                user_id: user_id
            });

            return res.json();

        } catch (error) {
            console.log(error);
            next(error);
        } 
    }


}