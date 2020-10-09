const knex = require('../database/index');


module.exports = {

    async index(req, res){

        try {
            const results = await knex('historicoMovimentacao');
            return res.json(results);            
        } catch (error) {
            console.log(error)
        }

    },


    async create(req, res, next){


        
        const { descTipoMovimentacao, dataMovimentacao, tipoMovimentacao} = req.body;
        
        

        console.log(req.body);
        
        try {
           await knex('historicoMovimentacao').insert({
            descTipoMovimentacao:descTipoMovimentacao, 
            dataMovimentacao:dataMovimentacao, 
            tipoMovimentacao:tipoMovimentacao, 
                
            })

            return res.json();

        } catch (error) {
            console.log(error);
            next(error);
        } 
    }

    

    
}