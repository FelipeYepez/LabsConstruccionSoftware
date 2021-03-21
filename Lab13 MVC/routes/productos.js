const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

const personajesController = require('../controllers/productosController');

router.get('/comprar', personajesController.getProductos);

router.post('/comprar', personajesController.postProductoNuevo);

router.get('/carrito', personajesController.getCarrito);

module.exports = router;