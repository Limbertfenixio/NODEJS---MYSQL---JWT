const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwtService = require('../services/jwt.service');

exports.login = async (req, res) => {
    const user = await User.getByEmail(req.body.email);
    if(user === undefined){
        res.json({
            error: 'Error, email o password no funciona'
        });
    } else {
        const equals = bcrypt.compareSync(req.body.password, user.password);
        if(!equals){
            res.json({
                error: 'Error, email o password incorrecto'
            });
        }else{
            res.json({
                succesfull: jwtService.createToken(user),
                done: 'Login correct'
            });
        }
    }
};

exports.register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const result = User.insert(req.body);
    res.json(result);
}

exports.getUsers = async (req ,res) => {
    const users = await User.getAll();
    res.json(users);
}