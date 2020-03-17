const mysql = require('mysql');

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

// Consulta para mantener una conexión infinita con el servidor de bd
connection.query('select 1 + 1', (err ,rows) => {console.log('La conexión con la base de datos ha sido exitosa');});

module.exports = connection;