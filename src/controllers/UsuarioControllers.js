const knex = require('../database/index');


module.exports = {

    async index(req, res){
        const results = await knex('usuarios');
        

        return res.json(results);
    },


    async create(req, res, next){
        
        const { nome, email, senha, telefone} = req.body;
        console.log(req.body);
        
        
        try {
            await knex('usuarios').insert({
                nome,
                email,
                senha,
                telefone,
            })
            return res.json({id});
        } catch (error) {
            next(error)
        } 
    }


}