const express = require('express');
const router = express.Router();

const aprendeController = require('../controllers/aprendeController');

router.get('/HTML', aprendeController.getHTML);

router.get('/CSS', aprendeController.getCSS);

router.get('/JS', aprendeController.getJS);

router.get('/Eventos', aprendeController.getEventos);

router.get('/FrameworksEstilo', aprendeController.getFrameworksEstilo);

router.get('/HTMLDinamico', aprendeController.getHTMLDinamico);

router.get('/MVC', aprendeController.getMVC);

router.get('/SesionesCookies', aprendeController.getSesionesCookies);

router.get('/BaseDatos', aprendeController.getBaseDatos);

module.exports = router;