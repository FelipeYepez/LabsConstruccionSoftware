const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

const inicioController = require('../controllers/inicioController');

router.get('/', inicioController.getInicio);

router.post('/', inicioController.postPassword);

module.exports = router;