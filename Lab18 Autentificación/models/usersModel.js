const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //El segundo argumento es el número de veces que se aplica el algoritmo, actualmente 12 se considera un valor seguro
        //El código es asíncrono, por lo que hay que regresar la promesa
        return bcrypt.hash(this.password, 12)
            .then((password_encriptado) => {
                return db.execute(
                    'INSERT INTO usuarios (username, password) VALUES (?, ?)', 
                    [this.username, password_encriptado]
                );
            }).catch(err => console.log(err));
    }
    
    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username =?', [username]);
    }
}