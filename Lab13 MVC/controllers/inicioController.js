exports.getInicio = (request, response, next) => {
    response.render('inicio');
}

exports.postPassword = (request, response, next) => {
    if(request.body.pass1 === request.body.pass2
        && request.body.pass1.length > 4){
        response.redirect('/productos/comprar');
    }
}