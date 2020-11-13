const azure = require('azure-storage');
require('dotenv').config()


module.exports  = {

    async uploadImage(image, idProduto){

        const blobSvc = azure.createBlobService(process.env.ACCESS_KEY_AZURE);

        let filename = 'produto' + idProduto + '.jpg';
        
        let matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        
        console.log(matches);

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

        const fileUrl = `https://petfood.blob.core.windows.net/petfood/${filename}`;
        return res.status(200).json({
        url: fileUrl
    });

    }


}