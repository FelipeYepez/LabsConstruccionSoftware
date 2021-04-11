const mysql = require('mysql2');

// Genera pool de conexiones para no mantener conexión activa todo el tiempo
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'productostienda',
    password: ''
});

module.exports = pool.promise();