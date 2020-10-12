const crypto = require('crypto');
const DADOS_CRIPTOGRAFAR = require('../settings/securit/objeto-configuracoes');

module.exports = {
    
    
    async criptografar(string) {
        const hash = await crypto.createHmac(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo)
                            .update(string)
                            .digest(DADOS_CRIPTOGRAFAR.tipo);
        return hash;
   },







}