const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const rutas_login = require('./routes/login');
const rutas_productos = require('./routes/productos');

//Middleware se procesa en orden
// Patron COMPOSITE, estilo hojas
app.use('/login', rutas_login);
app.use('/productos', rutas_productos);

let rutas = ["/login", "/pruductos", "/productos/carrito"];
app.use("/",(request, response, next) => {
    html = "";
    html += "<html>";
    html += '<head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += "<body>";
    html += "<h3>Dicha ruta no existe por favor prueba con alguna de las siguientes: </h3>";
    html += "<ul>";
    for (let ruta of rutas){
        html += "<li>" + ruta + "</li>";
    }
    html += "</ul>";
    html += "</body>";
    html += "</html>";
    response.status(404);
    response.send(html);
});

app.listen(3000);