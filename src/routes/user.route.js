const express = require('express');
const router = express.Router();
const User = require('../controllers/user.controller');
const TokenMiddleware = require('../middlewares/token');

router.get('/', async (req, res) => {
    res.send('Hola mundo');
});

router.post('/login', User.login);

router.post('/register', User.register);

/* Usamos el middleware para validar el token y proteger las apis */
router.use(TokenMiddleware.checkToken);
router.get('/users' , User.getUsers);

module.exports = router;