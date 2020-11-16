const azure = require('azure-storage');
require('dotenv').config()


module.exports  = {

    async uploadImageProduto(imagem, idProduto, url){

        const blobSvc = azure.createBlobService(process.env.ACCESS_KEY_AZURE);

        let filename = 'produto' + idProduto + '.jpg';

        let matches = imagem.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        let type = matches[1];

        // Obtém a imagem em si
        let buffer = new Buffer.from(matches[2], 'base64');
        
        await blobSvc.createBlockBlobFromText('imagens', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default.png'
            }
        });

        const fileUrl = `https://petfood.blob.core.windows.net/imagens/${filename}`;
        
        return url = fileUrl;

    },

    async uploadImageLogoParceiro(imagem, idParceiro, url){

        const blobSvc = azure.createBlobService(process.env.ACCESS_KEY_AZURE);

        let filename = 'LogoParceiro' + idParceiro + '.jpg';

        let matches = imagem.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        let type = matches[1];

        // Obtém a imagem em si
        let buffer = new Buffer.from(matches[2], 'base64');
        
        await blobSvc.createBlockBlobFromText('imagens', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default.png'
            }
        });

        const fileUrl = `https://petfood.blob.core.windows.net/imagens/${filename}`;
        
        return url = fileUrl;

    },
    async uploadImageCliente(blob, idCliente, url){

        try {

            const blobSvc = azure.createBlobService(process.env.ACCESS_KEY_AZURE);

            let filename = 'cliente' + idCliente + '.jpg';
    
            //let matches = imagem.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    
            //let type = matches[1];
    
            // Obtém a imagem em si
            // let buffer = new Buffer.from(imagem);
            
            await blobSvc.createBlockBlobFromText('imagens', filename, blob, {
                contentType: type
            }, function (error, result, response) {
                if (error) {
                    console.log(error)
                    filename = 'default.png'
                }
            });
    
            const fileUrl = `https://petfood.blob.core.windows.net/imagens/${filename}`;
            
            return url = fileUrl;

            
        } catch (e) {
            console.log(e);
        }



    }


}