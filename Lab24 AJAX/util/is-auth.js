// Para proteger middleware, es decir rutas si usuario no ha ingresado
module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/users/login');
    }
    next();
}