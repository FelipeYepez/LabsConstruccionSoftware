const path = require('path');

exports.getHTML = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'aprendeHTML.html'));
}

exports.getCSS = (request, response, next) => {
    response.render('aprendeCSS');
}

exports.getJS = (request, response, next) => {
    response.render('aprendeJS');
}

exports.getEventos = (request, response, next) => {
    response.render('aprendeEventos');
}

exports.getFrameworksEstilo = (request, response, next) => {
    response.render('aprendeFrameworks');
}

exports.getHTMLDinamico = (request, response, next) => {
    response.render('aprendeHTMLDinamico');
}