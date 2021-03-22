exports.getInicio = (request, response, next) => {
    response.render('inicio',
    {
        isLoggedIn: request.session.isLoggedIn
    });
}

exports.postInicioProductos = (request, response, next) => {
    response.redirect('/productos/comprar');
}