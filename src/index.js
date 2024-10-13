import express from 'express';

const app = express();
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes/index.js'; // Asegúrate de que el archivo index.js existe en el directorio routes
app.set('port', process.env.PORT || 4000);

app.use(routes);
app.listen(app.get('port'),  () => {
    console.log('Servidor iniciado en el puerto:', app.get('port'));
});