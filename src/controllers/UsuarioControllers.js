const knex = require('../database/index');

const cryptography = require('./Cryptography');

const jwt = require('jsonwebtoken');

require("dotenv-safe").config();

module.exports = {

    async index(req, res){

        try {

            const results = await knex('usuarios');
            return res.json(results);

        } catch (error) {
            console.log(error);
        }
    },

    async indexEmail(req, res){

        const email = req.params.email;
        console.log(email)
        try {

            const results = await knex
                                    .select('id')
                                    .from('usuarios')
                                    .where('email',email);

            return res.json(results);

        } catch (error) {
            console.log(error);
        }
    },


    async create(req, res, next){
        const { nome, email, senha, telefone } = req.body;
        console.log(req.body);
        let userEmail = await knex('usuarios').where('email', email);

        console.log(userEmail.length);

        if( userEmail.length > 0 ){

            return res.status(409).json({ warning: 'E-mail já está sendo utilizado!.'});
            
        }else{
          
            try {
                let crptSenha = await cryptography.criptografar(senha);
                
                let {id} = await knex('usuarios').insert({
                      nome:nome,
                      email:email,
                      senha:crptSenha,
                      telefone:telefone,
                  });

                  let token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 1500

                });

                  console.log(req.body);
                  return res.status(200).json({ success: 'Usuario criado com sucesso!', 
                                                auth: true, 
                                                token: token});
              } catch (error) {
                  console.log(error);
                  next(error);
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
            console.log(error);
            next(error);
        } 
    }

},

    async alterUser(req, res, next){

        try {
            
            const {id} = req.params;
            console.log(id);
            const { nome, email, senha, telefone} = req.body;
            console.log(req.body);

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
    },

    async login(req, res, next){
        try {
            
            const { email, senha} = req.body;

            let userEmail = await knex('usuarios').where('email', email).select('email');
            let crptSenha = await cryptography.criptografar(senha);
            let userSenha = await knex('usuarios').where('email', email).select('senha');

            console.log(crptSenha);
            console.log(userSenha);

            if(userEmail.length === 1 & userSenha.length === 1 ){
                
                let id = await knex('usuarios').where('email', email).select('id');

                let token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 1500

                });

                return res.status(200).json({ 
                    success: 'Login autenticado', 
                    auth: true, 
                    token: token
                });


            }else{
                return res.status(404).json({ warning: 'E-mail ou senha estão incorretos'});
            }

        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    async logout(req, res, next){

    res.json({auth: false, token: null})
    }
} //Fim os metodos desse objeto      