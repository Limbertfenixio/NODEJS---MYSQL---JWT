const jwt = require('jwt-simple');
const moment = require('moment');

/* Función que se encarga de validar si existe un token y si este es valido */
const checkToken = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'Usuario no autorizado'
        });
    }

    var token = null;
    try {
        token = req.headers.authorization.split(" ")[1];

        var payload = payload = jwt.decode(token, process.env.TOKEN_KEY);
 
        if(payload.exp <= moment.unix()){
            return res.status(401).send({ message: 'El token ha expirado'});
        }
        
        req.user = payload.sub;

        next();
    } catch (error) {
        res.status(403).send({
            message: 'Usuario no autorizado'
        });
    }
};


module.exports = { checkToken: checkToken};