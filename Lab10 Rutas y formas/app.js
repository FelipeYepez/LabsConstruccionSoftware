// Ejecutar en node como: node app.js
console.log("Servidor corriendo");

const http = require('http');
const requestHandler = require('./routes');
const server = http.createServer( requestHandler );
server.listen(3000);
