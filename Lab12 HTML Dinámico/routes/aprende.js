const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/HTML', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'aprendeHTML.html'));
});

router.use('/CSS', (request, response, next) => {
    response.render('aprendeCSS');
});

router.get('/JS', (request, response, next) => {
    response.render('aprendeJS');
});

router.get('/Eventos', (request, response, next) => {
    response.render('aprendeEventos');
});

router.get('/FrameworksEstilo', (request, response, next) => {
    response.render('aprendeFrameworks');
});

module.exports = router;