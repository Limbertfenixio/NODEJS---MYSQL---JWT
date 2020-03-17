const db = require('../config/db.config');
/* Función para pedir a todos los usuarios de la base de datos */
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, rows) => {
            if (err) reject (err);
            resolve(rows);
        });
    });
};

/* Función que se encarga de insertar un nuevo usuario en la bd */
const insert = (user) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users ( email, password, name) VALUES(?,?,?)', [user.email, user.password, user.name], (err, result) => {
            if(err) reject(err);
            if(result) {
                resolve(result);
            };
        });
    });
}

/* Función que se encarga de obtener a un usuario mediante su email */
const getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
            if(err) reject(err);
            resolve(rows[0])
        });
    });
}

module.exports = {getAll: getAll, insert: insert, getByEmail: getByEmail};