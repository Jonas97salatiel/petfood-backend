const jwt = require('jsonwebtoken');

module.exports = {

    async   verifyJWT(req, res, next){

        let token = req.headers['x-access-token'];

        if(!token) return res.status(401).json({auth: false, message: 'No token provided.'});

        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(err) return res.status(500).json({auth: false, message: 'Failed to authenticate token.'});

            req.userIdJwt = decoded.id;
            next();
        });
    }
};