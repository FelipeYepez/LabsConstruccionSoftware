const express = require('express');
const app = express();
// Para acceder a los datos de las formas
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Para utilizar AJAX
app.use(bodyParser.json());

// Para enviar archivos HTML como respuesta desde express
const path = require('path');
// Para enviar estilos CSS de manera estática cuando un documento lo requiera
app.use(express.static(path.join(__dirname, 'public')));

//Para acceder a los recursos de la carpeta uploads
app.use(express.static(path.join(__dirname, 'uploads')));

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
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

// Manejo de archivos
const multer = require('multer');
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});
// Para limitar el tipo de archivos que se pueden subir, podemos crear una nueva constante de configuración y pasar la constante al registro:
const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg' ) {
            callback(null, true);
    } else {
            callback(null, false);
    }
}
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('imagen_recomendacion')); 


// Manejo de rutas
const rutas_inicio = require('./routes/inicio');
const rutas_productos = require('./routes/productos');
const rutas_aprende = require('./routes/aprende');
const rutas_error = require('./routes/error');
const rutas_user = require('./routes/users');

app.use('/inicio', rutas_inicio);
app.use('/productos', rutas_productos);
app.use('/aprende', rutas_aprende);
app.use('/users', rutas_user);
app.use('/', rutas_error);

app.listen(3000);