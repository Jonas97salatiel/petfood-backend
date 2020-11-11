const azure = require('azure-storage');
const {config} =  require('dotenv');


module.exports  = {

    async uploadImage(image, codProd){

        const blobSvc = azure.createBlobService(process.env.ACCESS_KEY_AZURE);
        
        let filename = 'produto' + codProd + '.jpg';
        
        let matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        let type = matches[1];

        // Obtém a imagem em si
        let buffer = new Buffer.from(matches[2], 'base64');
        
        await blobSvc.createBlockBlobFromText('petfood', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default.png'
            }
        });

    }


}