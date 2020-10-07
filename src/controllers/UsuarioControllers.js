const knex = require('../database/index');


module.exports = {

    async index(req, res){

        try {

            const results = await knex('usuarios');
            return res.json(results);

        } catch (error) {
            console.log(error)
        }

       
    },


    async create(req, res, next){
        
        try {

            const { nome, email, senha, telefone} = req.body;
            //Função para verificar se o e-mail que está sendo utilizado
            //para cadastrador o usuário já está cadastrado na base.
            const user_email = await knex('usuarios').count('email', 'like', email);
            
            if (user_email[0].count > 1){
                
                return res.status(401).json({ error: 'E-mail já está sendo utilizado.'});
            
            }else{

                await knex('usuarios').insert({
                    nome,
                    email,
                    senha,
                    telefone,
                })
                return res.status(200).json({ success: 'Cadastro realizado com sucesso.'});

            }
            
        } catch (error) {
            console.log(error)
            next(error)
        } 

    },

    async alterUser(req, res, next){

        try {
            
            const {id} = req.params;
            console.log(id)
            const { nome, email, senha, telefone} = req.body;
            console.log(req.body)

            await knex('usuarios').update({nome}).where({id});
            await knex('usuarios').update({email}).where({id});
            await knex('usuarios').update({senha}).where({id});
            await knex('usuarios').update({telefone}).where({id});
            
            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.'});
            
        } catch (error) {
            console.log(error)
            next(error)
        }

    }

}