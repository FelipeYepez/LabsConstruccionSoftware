const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');

const isAuth = require('../util/is-auth');

router.get('/comprar', productosController.getProductos);

router.post('/comprar', isAuth, productosController.postProductoNuevo);

router.get('/carrito', isAuth, productosController.getCarrito);

router.get('/comprar/:producto_id', isAuth, productosController.getUnProducto);

module.exports = router;