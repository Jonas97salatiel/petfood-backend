const jwt = require('jsonwebtoken');

require("dotenv-safe").config();

module.exports = (req, res, next) => {


    const authHeader = req.headers.authorization;

    console.log(authHeader);

    if(!authHeader) return res.status(401).send({error: "No token provided"});

    const [header, payload, token] = authHeader.split('.');

    jwt.verify(authHeader, process.env.SECRET, (err, decoded) =>{
        console.log(err);
        if(err) return res.status(401).send({auth: false, message: "Failed to authenticate token." });
        

        req.userId = decoded.id;
        return next();
    })

    

}