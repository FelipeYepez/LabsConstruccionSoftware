const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

// Usar render para desplegar template de ejs
router.get('/', (request, response, next) => {
    response.render('inicio');
});

router.post('/', (request, response, next) => {
    if(request.body.pass1 === request.body.pass2
        && request.body.pass1.length > 4){
        response.redirect('/productos/comprar');
    }
});

module.exports = router;