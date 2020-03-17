const jwt = require('jwt-simple');
const moment = require('moment');

/* Función para crear el token 
    @params user - nombre de usuario para la data del token
*/
exports.createToken = (user) => {
    let payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix() 
    }

    return jwt.encode(payload, process.env.TOKEN_KEY);
};