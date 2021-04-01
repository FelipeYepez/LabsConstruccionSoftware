exports.getLogin = (request, response, next) => {
    response.render('login');
}

exports.postLogin = (request, response, next) => {
    if(request.body.pass1 === request.body.pass2
        && request.body.pass1.length > 4
        && request.body.usuario != undefined){
            request.session.isLoggedIn = true;
            request.session.user = request.body.usuario;
            response.redirect('/inicio');
    }
    else{
        response.status(400);
    }
}

exports.getlogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};