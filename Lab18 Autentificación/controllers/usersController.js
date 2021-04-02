const UserModel = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const session = require('express-session');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        error: request.session.error,
        csrfToken: request.csrfToken()
    });
};

exports.postLogin = (request, response, next) => {
    request.session.error = "";
    const username = request.body.username;
    UserModel.fetchOne(username)
        .then(([rows, fieldData]) => {
            if(rows.length > 0){
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.user = request.body.username;
                            return request.session.save(err => {
                                response.redirect('/inicio');
                            });
                        }
                        else{
                            request.session.error = "Usuario y/o contraseña no coincide";
                            response.redirect('/users/login');
                        }
                    }).catch(err => {
                        console.log(err);
                        response.redirect('/users/login');
                    });
            }
            else{
                request.session.error = "Usuario y/o contraseña no coincide";
                response.redirect('/users/login');
            }
        }).catch(err => console.log(err));
};

exports.getlogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getRegister = (request, response, next) => {
    response.render('register', {
        csrfToken: request.csrfToken()
    });
};

exports.postRegister = (request, response, next) => {
    if (request.body.pass1 === request.body.pass2
        && request.body.pass1.length > 4
        && request.body.usuario != undefined) {
        const nuevoUsuario = new UserModel(request.body.usuario, request.body.pass1);
        nuevoUsuario.save()
            .then(() => {
                response.redirect('/users/login');
            }).catch(err => console.log(err));
    }
    else{
        response.status(400);
        response.redirect('/users/register');
    }
}