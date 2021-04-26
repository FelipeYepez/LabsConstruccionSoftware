const express = require('express');
const router = express.Router();

const inicioController = require('../controllers/inicioController');

router.get('/', inicioController.getInicio);

router.post('/', inicioController.postInicioProductos);

module.exports = router;