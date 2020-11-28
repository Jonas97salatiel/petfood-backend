const knex = require('../database/index');
const imageProduto = require('../controllers/ImageControllers');

module.exports = {

    async index(req, res) {

        try {
            const results = await knex('produtos')
                .join('parceiro', 'produtos.idParceiro', '=', 'parceiro.idParceiro');
            return res.json(results)

        } catch (error) {
            next(error);
        }

    },

    async indexProdutosParceiro(req, res) {

        const { idParceiro } = req.params;

        const { query } = req.body;

        console.log(idParceiro);

        console.log(query);

        try {

            if (query === '0') {

                const results = await knex('produtos')
                    .where({ idParceiro });
                return res.json(results);

            } else {

                const results = await knex('produtos')
                    .where({ idParceiro }, 'descricaoProduto', 'like', `%${query}%`);
                return res.json(results);

            }

        } catch (error) {
            console.log(error)
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
            nome,
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
                nome: nome,
                idMarca: idMarca,
                idEspecie: idEspecie,
                idCategoria: idCategoria,
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

            const urlImage = await imageProduto.uploadImageProduto(imagem, idProduto);

            await knex('produtos')
                .where({
                    idProduto,
                    idParceiro
                })
                .update({ urlImage: urlImage });

            return res.json(200) + console.log(`Produto cadastrado com sucesso${idProduto}. Url da imagem ${urlImage}`);

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async alterProduto(req, res, next) {

        try {

            const { idProduto } = req.params;

            const { descricaoProduto, valor, qtdEstoque, medida, peso, status, nome, idMarca, idEspecie, idCategoria, idParceiro, imagem } = req.body;

            const urlImage = await imageProduto.uploadImageProduto(imagem, idProduto);

            const produtos = await knex('produtos')
                .update({
                    descricaoProduto: descricaoProduto,
                    valor: valor,
                    quantidade: qtdEstoque,
                    unidadeMedida: medida,
                    peso: peso,
                    status: status,
                    nome: nome,
                    idMarca: idMarca,
                    idEspecie: idEspecie,
                    idCategoria: idCategoria,
                    urlImage: urlImage
                })
                .where({ idProduto });

            return res.status(200).json({ success: 'Cadastro atualizado com sucesso.', produtos });

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
    },

    async consultaProduto(req, res, next) {

        try {

            const { idProduto } = req.params

            const results = await knex('produtos')
                .join('parceiro', 'produtos.idParceiro', '=', 'parceiro.idParceiro')
                .join('marca', 'produtos.idMarca', '=', 'marca.idMarca')
                .where({ idProduto });

            //.where({ idProduto });

            return res.status(200).json(results);

        } catch (error) {
            next(error)
        }

    },

}