const lista_productos = [
    ["Adidas Yeezy Boost", "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Adidas-Yeezy-Boost-350-V2-Zebra-1_600x.png?v=1541153763", 150, 15, 0],
    ["Cangurera Adidas", "https://cangureras.net/wp-content/uploads/cangureras-adidas.jpg", "25", 7, 2],
    ["Gorra Adidas", "https://i.pinimg.com/originals/52/9f/57/529f57192de156db1b0f23fc334bc18d.png", 30, 23, 3]
];

const productosNuevos = [];

module.exports = class Productos{
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(productoNuevo) {
        this.productoNuveo = productoNuevo;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    saveProductoNuevo() {
        productosNuevos.push(this.productoNuveo);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllProductos() {
        return lista_productos;
    }

    static fetchAllProductosNuevos(){
        return productosNuevos;
    }
}