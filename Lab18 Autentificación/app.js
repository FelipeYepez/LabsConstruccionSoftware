const express = require('express');
const app = express();
// Para acceder a los datos de las formas
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Para enviar archivos HTML como respuesta desde express
const path = require('path');
// Para enviar estilos CSS de manera estática cuando un documento lo requiera
app.use(express.static(path.join(__dirname, 'public')));

// Definir EJS como motor para capa de las vistas definiendo carpeta
app.set('view engine', 'ejs');
app.set('views', 'views');

// Utilizar cookies
var cookieParser = require('cookie-parser')
app.use(cookieParser());

// Utilizar sesiones
const session = require('express-session');
app.use(session({
    secret: 'oaldeuampdquzgetck', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Proteger contra Cross-Site Request Forgery
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

const rutas_inicio = require('./routes/inicio');
const rutas_productos = require('./routes/productos');
const rutas_aprende = require('./routes/aprende');
const rutas_error = require('./routes/error');
const rutas_user = require('./routes/users');
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});
app.use('/inicio', rutas_inicio);
app.use('/productos', rutas_productos);
app.use('/aprende', rutas_aprende);
app.use('/users', rutas_user);
app.use('/', rutas_error);

app.listen(3000);