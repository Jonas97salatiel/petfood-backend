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
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone,
            })
            return res.json();
        } catch (error) {
            console.log(error)
            next(error)
        } 
    }


}