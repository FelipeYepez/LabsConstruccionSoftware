const ProductosModel = require('../models/productosModel');

exports.getProductos = (request, response, next) => {
    ProductosModel.fetchAllProductos()
        .then(([rows, fieldData]) => {
            response.render('productosComprar', {
                productos: rows,
                isLoggedIn: request.session.isLoggedIn,
                csrfToken: request.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postProductoNuevo = (request, response, next) => {
    const producto = request.body.productoNuevo;
    const imagen = request.file;

    if(!imagen) {
        console.error('Error al subir la imagen');
        return response.status(422).redirect('/productos/comprar');
    }
    else if(producto.length > 0){
        const productoNuevo = new ProductosModel(producto, imagen.filename);
        productoNuevo.saveProductoNuevo()
            .then(() => {
                response.setHeader('Set-Cookie', ['nuevoProducto=' + producto + '; HttpOnly']);
                response.redirect('/productos/carrito');
            })
            .catch(err => {
                console.log(err);
            });
    }
    else{
        response.status(400);
    }
}

exports.getCarrito = (request, response, next) => {
    // Usar cookie-parser para obtener cookies
    const Cookies = request.cookies;
    console.log(Cookies.nuevoProducto);
    ProductosModel.fetchAllProductosNuevos()
        .then(([rows, fieldData]) => {
            ProductosModel.fetchAllProductos()
                .then(([rows2, fieldData]) => {
                    response.render('productosCarrito', {
                        productos: rows2,
                        productosNuevos: rows,
                        isLoggedIn: request.session.isLoggedIn
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}

// Utilizar variable en ruta para realizar consulta y cargar vista
exports.getUnProducto = (request, response, next) => {
    const id_enruta = request.params.producto_id;
    ProductosModel.fetchOneProducto(id_enruta)
        .then(([rows, fieldData]) => {
            response.render('productosComprar', {
                productos: rows,
                isLoggedIn: request.session.isLoggedIn,
                csrfToken: request.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postBuscar = (request, response, next) => {
    const nombre = request.body.valor_busqueda;
    ProductosModel.fetchByName(nombre)
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
        })
        .catch(err => {
            console.log(err);
        });
}