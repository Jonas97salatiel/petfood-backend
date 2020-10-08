const knex = require('../database/index');


module.exports = {

    async index(req, res){

        try {
            const results = await knex('enderecos');
            return res.json(results);            
        } catch (error) {
            console.log(error)
        }

    },


    async create(req, res, next){


        const user_id = req.headers.user_id;
        const { cep, rua, numero, complemento, bairro, cidade, uf, pais } = req.body;
        
        

        console.log(req.body);
        
        try {
           await knex('enderecos').insert({
                cep:cep, 
                rua:rua, 
                numero:numero, 
                complemento:complemento, 
                bairro:bairro, 
                cidade:cidade, 
                uf:uf, 
                pais:pais,
                user_id:user_id
            })

            return res.json();

        } catch (error) {
            console.log(error);
            next(error);
        } 
    },

    async alterEndereco(req, res, next){

        try {
            
            const {id_endereco} = req.params;
            console.log(id_endereco)
            
            const { cep, rua, numero, complemento,bairro,cidade,uf,pais,user_id} = req.body;
            console.log(req.body)

            await knex('enderecos').update({cep}).where({id_endereco});
            await knex('enderecos').update({rua}).where({id_endereco});
            await knex('enderecos').update({numero}).where({id_endereco});
            await knex('enderecos').update({complemento}).where({id_endereco});
            await knex('enderecos').update({bairro}).where({id_endereco});
            await knex('enderecos').update({cidade}).where({id_endereco});
            await knex('enderecos').update({uf}).where({id_endereco});
            await knex('enderecos').update({pais}).where({id_endereco});
            await knex('enderecos').update({user_id}).where({id_endereco});


            
            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.'});
            
        } catch (error) {
            console.log(error)
            next(error)
        }

    }


}