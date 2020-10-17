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
        const { nome, email, senha, telefone } = req.body;
        
        const userEmail = await knex('usuarios').count('email', email);
        
        console.log(userEmail[0].count);

       
            try {
                await knex('usuarios').insert({
                     nome:nome,
                     email:email,
                     senha:senha,
                     telefone:telefone,
                 })
                 console.log(req.body);
                 return res.status(200).json({ success: 'Usuario criado com sucesso!.'});
             } catch (error) {
                 console.log(error)
                 next(error)
             }

        
        
        try {
           await knex('usuarios').insert({
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone,
            })
            return res.status(200).json({ success: 'Usuario criado com sucesso!.'});
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

    },

    async delete(req,res,next){
        try{
            const {id}=req.params

            await knex('usuarios')
            .where({id})
            .del()

            return res.send()
        }catch(error){
            next(error)
        }
}

}