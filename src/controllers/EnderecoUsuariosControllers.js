
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


       // const userId = req.headers.userId;

        const { cep, rua, numero, complemento, bairro, cidade, uf, pais,userId } = req.body;
        
        
        console.log(userId);
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
                userId:userId
            })

            return res.status(200).json({ success: 'Endereço criado com sucesso!.'});

        } catch (error) {
            console.log(error);
            next(error);
        } 
    },

    

    async alterEndereco(req, res, next){

        try {
            
            const {idEndereco} = req.params;
            console.log(idEndereco)
            
            const { cep, rua, numero, complemento,bairro,cidade,uf,pais, userId} = req.body;
            console.log(req.body)

            await knex('enderecos').update({cep}).where({idEndereco});
            await knex('enderecos').update({rua}).where({idEndereco});
            await knex('enderecos').update({numero}).where({idEndereco});
            await knex('enderecos').update({complemento}).where({idEndereco});
            await knex('enderecos').update({bairro}).where({idEndereco});
            await knex('enderecos').update({cidade}).where({idEndereco});
            await knex('enderecos').update({uf}).where({idEndereco});
            await knex('enderecos').update({pais}).where({idEndereco});
            await knex('enderecos').update({userId}).where({idEndereco});


            
            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.'});
            
        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req,res,next){
                try{
                    const {idEndereco}=req.params

                    await knex('enderecos')
                    .where({idEndereco})
                    .del()

                    return res.send()
                }catch(error){
                    next(error)
                }
    }
}