import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars'; // Nota el cambio aquí
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializaciones
const app = express();
dotenv.config();

// Ajustes del servidor
app.set('port', process.env.PORT || 4500);
app.set('views', path.join(__dirname, 'views')); // Configuración de la ruta donde se encuentran las vistas

// Configuración de Handlebars
const hbs = create({
    defaultLayout: 'main', // Configuración del layout principal
    layoutsDir: path.join(app.get('views'), 'layouts'), // Configuración de la ruta de los layouts
    extname: '.hbs' // Configura la extensión que tendrán los archivos Handlebars
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs'); // Configuración para ejecutar el motor de plantillas

// Middlewares
app.use(morgan('dev')); // Configurando el middleware morgan para visualizar que está llegando al servidor
app.use(express.urlencoded({ extended: false })); // Sirve para poder aceptar datos desde formularios

// Configuración de rutas
import routes from './routes/index.js';
app.use(routes); // Node automáticamente busca el index.js del módulo
import estudiantesRoutes from './routes/estudiantes.js';
app.use('/estudiantes', estudiantesRoutes); // Configuración de ruta para estudiantes

// Archivos públicos (acá se coloca todo el código al cual el navegador puede acceder)
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
});
