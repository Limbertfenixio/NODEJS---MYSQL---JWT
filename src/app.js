const express = require('express');
const app = express();
const routes = require('./routes/user.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

/* Configuramos cors */
app.use(cors());

/* Settings */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '10mb'}));

/* Establecemos el puerto e iniciamos el servidor a escuchar en el puerto */
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('server-on-port: ' + app.get('port'));
});
/* Usamos las rutas personalizadas */
app.use('/', routes);