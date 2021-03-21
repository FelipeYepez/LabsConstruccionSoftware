let rutas = ["/inicio", "/pruductos/comprar", "/productos/carrito",
"aprende/HTML", "aprende/CSS", "aprende/JS", "aprende/Eventos",
"aprende/FrameworksEstilo"];

module.exports = class Rutas{
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(ruta) {
        this.ruta = ruta;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return rutas;
    }
}