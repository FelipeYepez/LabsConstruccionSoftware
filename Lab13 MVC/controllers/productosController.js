const ProductosModel = require('../models/productosModel');

exports.getProductos = (request, response, next) => {
    response.render('productosComprar', {
        productos: ProductosModel.fetchAllProductos()
    });
}

exports.postProductoNuevo = (request, response, next) => {
    if(request.body.productoNuevo.length > 0){
        const productoNuevo = new ProductosModel(request.body.productoNuevo);
        productoNuevo.saveProductoNuevo();
        response.redirect('/productos/carrito');
    }
    else{
        response.status(400);
    }
}

exports.getCarrito = (request, response, next) => {
    response.render('productosCarrito', {
        productos: ProductosModel.fetchAllProductos(),
        productosNuevos: ProductosModel.fetchAllProductosNuevos()
    });
}