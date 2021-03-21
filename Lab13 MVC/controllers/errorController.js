const rutas = require('../models/errorModel');

exports.getError404 = (request, response, next) => {
    response.status(404);
    response.render('error404', {
        rutas: rutas.fetchAll()
    });
}