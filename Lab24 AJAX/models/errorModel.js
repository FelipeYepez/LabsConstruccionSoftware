let rutas = ["/users/register", "/users/login", "/users/logout", "/inicio", "/productos/comprar", "/productos/comprar/1", "/productos/carrito",
"/aprende/HTML", "/aprende/CSS", "/aprende/JS", "/aprende/Eventos",
"/aprende/FrameworksEstilo", "/aprende/HTMLDinamico", "/aprende/MVC", "/aprende/SesionesCookies", "/aprende/BaseDatos"];

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