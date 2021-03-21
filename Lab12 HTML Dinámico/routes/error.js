const express = require('express');
const router = express.Router();

let rutas = ["/inicio", "/pruductos/comprar", "/productos/carrito",
"aprende/HTML", "aprende/CSS", "aprende/JS", "aprende/Eventos",
"aprende/FrameworksEstilo"];
// Usar render para desplegar template de ejs
router.use('/', (request, response, next) => {
    response.status(404);
    response.render('error404', {
        rutas: rutas
    });
});

module.exports = router;