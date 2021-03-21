const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

const lista_productos = [
    ["Adidas Yeezy Boost", "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Adidas-Yeezy-Boost-350-V2-Zebra-1_600x.png?v=1541153763", 150, 15, 0],
    ["Cangurera Adidas", "https://cangureras.net/wp-content/uploads/cangureras-adidas.jpg", "25", 7, 2],
    ["Gorra Adidas", "https://i.pinimg.com/originals/52/9f/57/529f57192de156db1b0f23fc334bc18d.png", 30, 23, 3]
];

// Usar render para desplegar template de ejs
router.get('/comprar', (request, response, next) => {
    response.render('productosComprar', {
        productos: lista_productos
    });
});
let productosNuevos = [];
router.post('/comprar', (request, response, next) => {
    if(request.body.productoNuevo !== ""){
        productosNuevos.push(request.body.productoNuevo);
        response.redirect('/productos/carrito');
    }
});

router.get('/carrito', (request, response, next) => {
    response.render('productosCarrito', {
        productos: lista_productos,
        productosNuevos: productosNuevos
    });
});

module.exports = router;