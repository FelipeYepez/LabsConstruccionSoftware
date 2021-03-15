const express = require('express');
const bodyParser = require('body-parser');
const { response, request } = require('express');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (request, response, next) => {
    html = "";
    html += "<html>";
    html += '<head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += "<body>";
    html += "<h2>Adidas Yeezy Boost</h2>";
    html += "<br>";
    html += '<img src="https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Adidas-Yeezy-Boost-350-V2-Zebra-1_600x.png?v=1541153763" alt="Adidas Yeezy Boost 350">';
    html += "<br>";
    html += '<span>$150</span>';
    html += "<hr>";
    html += "<h2>Cangurera Adidas</h2>";
    html += "<br>";
    html += '<img src="https://cdn.shopify.com/s/files/1/0150/2598/products/Screen_Shot_2018-11-15_at_1.08.12_AM_560x.png?v=1572314586" alt="Cangurera Adidas">';
    html += "<br>";
    html += '<span>$25</span>';
    html += "<hr>";
    html += "<h3>Qué producto quieres?</h3>"
    html += '<form action= "productos" method= "POST"><input type="text" name= "producto"><input type="submit" value= "Comprar"></form>';
    html += "</body>";
    html += "</html>";
    response.send(html);
});
let productosEscogido = ["Gorra", "Zapato"];
router.post('/', (request, response, next) => {
    productosEscogido.push(request.body.producto);
    response.redirect('/productos/carrito');
});

router.get('/carrito', (request, response, next) => {
    html = "";
    html += "<html>";
    html += '<head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += "<body>";
    html += "<h1>Carrito Compras</h1>";
    html += "<h2>Felicidades ya has comprado:</h2>";
    html += "<ul>";
    for (let producto of productosEscogido){
        html += "<li>" + producto + "</li>";
    }
    html += "</ul>";
    html += "</body>";
    html += "</html>";
    response.send(html);
});

module.exports = router;