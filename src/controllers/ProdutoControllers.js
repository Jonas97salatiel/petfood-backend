const knex = require('../database/index');
const imageProduto = require('../controllers/ImageControllers');

module.exports = {

    async index(req, res) {

        try {
            const results = await knex('produtos');
            return res.json(results);
        } catch (error) {
            next(error);
        }

    },


    async create(req, res, next) {

        //const idParceiro = req.headers.idParceiro;
        const { descricaoProduto, 
                valor, 
                qtdEstoque, 
                medida,
                peso, 
                status, 
                idMarca,
                idEspecie,
                idCategoria,
                idParceiro,
                imagem 
             } = req.body;

        try {
             await knex('produtos').insert({
                descricaoProduto: descricaoProduto,
                valor: valor,
                quantidade: qtdEstoque,
                unidadeMedida: medida,
                peso: peso,
                status: status,
                idMarca: idMarca,
                idEspecie: idEspecie,
                idCategoria:idCategoria,
                idParceiro: idParceiro,
                urlImage: 'null'
            });

            const result = await knex('produtos')
                                    .select('idProduto')
                                    .where({  
                                        descricaoProduto: descricaoProduto,
                                        idParceiro: idParceiro
                                    })
            const idProduto = result[0].idProduto;
    

          const urlImage =  await imageProduto.uploadImage(imagem, idProduto);

          await knex('produtos')
                    .update({ urlImage })
                    .where({ 
                        idProduto:idProduto,
                        idParceiro: idParceiro
                    });

            return res.json() + console.log(`Produto cadastrado com sucesso${idProduto}. Url da imagem ${urlImage}`);

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterProduto(req, res, next) {

        try {

            const { idProduto } = req.params;
            

            const { descricaoProduto, valor, qtdEstoque, medida,peso, status,idMarca,idEspecie,idCategoria,idParceiro } = req.body;
            console.log(req.body)

            await knex('produtos').update({ descricaoProduto }).where({ idProduto });
            await knex('produtos').update({ valor }).where({ idProduto });
            await knex('produtos').update({ qtdEstoque }).where({ idProduto });
            await knex('produtos').update({ medida }).where({ idProduto });
            await knex('produtos').update({ peso }).where({ idProduto });
            await knex('produtos').update({ status }).where({ idProduto });
            await knex('produtos').update({ idMarca }).where({ idProduto });
            await knex('produtos').update({ idEspecie }).where({ idProduto });
            await knex('produtos').update({ idCategoria }).where({ idProduto });
            await knex('produtos').update({ idParceiro }).where({ idProduto });
         
            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.' });

        } catch (error) {
            console.log(error)
            next(error)
        }

    },


    async delete(req, res, next) {
        try {
            const { idProduto } = req.params

            await knex('produtos')
                .where({ idProduto })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }

}