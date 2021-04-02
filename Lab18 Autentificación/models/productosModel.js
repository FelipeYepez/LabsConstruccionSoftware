const db = require('../util/database');

module.exports = class Productos{
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(productoNuevo) {
        this.productoNuevo = productoNuevo;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    saveProductoNuevo() {
        return db.execute('INSERT INTO productosnuevos (nombre) VALUES (?)', [this.productoNuevo]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllProductos() {
        return db.execute('SELECT * FROM productosexistentes');
    }
    
    static fetchOneProducto(id) {
        return db.execute('SELECT * FROM productosexistentes WHERE id_producto =?', [id]);
    }

    static fetchAllProductosNuevos(){
        return db.execute('SELECT * FROM productosnuevos');
    }
}