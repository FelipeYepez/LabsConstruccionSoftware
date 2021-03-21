const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Para enviar archivos HTML como respuesta desde express
const path = require('path');
// Para enviar estilos CSS de manera estática cuando un documento lo requiera
app.use(express.static(path.join(__dirname, 'public')));

// Definir EJS como motor para capa de las vistas definiendo carpeta
app.set('view engine', 'ejs');
app.set('views', 'views');

const rutas_inicio = require('./routes/inicio');
const rutas_productos = require('./routes/productos');
const rutas_aprende = require('./routes/aprende');
const rutas_error = require('./routes/error');

app.use('/inicio', rutas_inicio);
app.use('/productos', rutas_productos);
app.use('/aprende', rutas_aprende);
app.use('/', rutas_error);


app.listen(3000);