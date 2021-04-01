const express = require('express');
const router = express.Router();

const personajesController = require('../controllers/productosController');

router.get('/comprar', personajesController.getProductos);

router.post('/comprar', personajesController.postProductoNuevo);

router.get('/carrito', personajesController.getCarrito);

router.get('/comprar/:producto_id', personajesController.getUnProducto);

module.exports = router;