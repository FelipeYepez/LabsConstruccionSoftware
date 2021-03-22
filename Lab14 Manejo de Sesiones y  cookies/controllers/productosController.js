const ProductosModel = require('../models/productosModel');

exports.getProductos = (request, response, next) => {
    response.render('productosComprar', {
        productos: ProductosModel.fetchAllProductos(),
        isLoggedIn: request.session.isLoggedIn
    });
}

exports.postProductoNuevo = (request, response, next) => {
    const producto = request.body.productoNuevo
    if(producto.length > 0){
        const productoNuevo = new ProductosModel(producto);
        productoNuevo.saveProductoNuevo();
        response.setHeader('Set-Cookie', ['nuevoProducto=' + producto + '; HttpOnly']);
        response.redirect('/productos/carrito');
    }
    else{
        response.status(400);
    }
}

exports.getCarrito = (request, response, next) => {
    // Obtener cookies
    const Cookies = request.get('Cookie');
    console.log(Cookies.split(';')[1].trim().split('=')[1]);
    // Usar cookie-parser para obtener cookies
    const Cookies2 = request.cookies;
    console.log(Cookies2.nuevoProducto);
    response.render('productosCarrito', {
        productos: ProductosModel.fetchAllProductos(),
        productosNuevos: ProductosModel.fetchAllProductosNuevos(),
        isLoggedIn: request.session.isLoggedIn
    });
}