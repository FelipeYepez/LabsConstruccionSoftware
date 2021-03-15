const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (request, response, next) => {
    html = "";
    html += "<html>";
    html += '<head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += "<body>";
    html += "<h1> Laboratorio 11: Express</h1>";
    html += "<p>Soy <strong>Felipe Yépez</strong> , estudiante de Ingeniería en Computación y tecnologías de la información en el Tecnológico de Monterrey campus Querétaro. </p> <address> <code>A01658002</code> Mail: a01658002@itesm.mx </address>";
    html += "<br><hr>";
    html += "<h2>Ingresa tu nombre</h2>";
    html += '<form action= "login" method= "POST"><input type="text" name= "nombre"><input type="submit" value= "Ver Productos"></form>';
    html += "</body>";
    html += "</html>";
    response.send(html);
});
let nombreCliente = "";
router.post('/', (request, response, next) => {
    nombreCliente = request.body.nombre;
    response.redirect('/productos');
});

module.exports = router;