import express from 'express';
const router = express.Router();
import queries from '../repositories/EstudianteRepository.js';
// Endpoint para mostrar todos los estudiantes
router.get('/', async (req, res) => {
    const estudiantes = await queries.obtenerEstudiantes();
    res.render('estudiantes/listado', { estudiantes }); // Mostramos ellistado de estudiantes
});

// Endpoint que permite mostrar el formulario para agregar un nuevo estudiante
router.get('/agregar', async (req, res) => {
    // Renderizamos el formulario
    res.render('estudiantes/agregar');
});
// Endpoint para agregar un estudiante
router.post('/agregar', async (req, res) => {
    // Falta agregar logica
});
// Endpoint que permite eliminar un estudiante
router.get('/eliminar/:idestudiante', async (req, res) => {
    // Desestructuramos el objeto que nos mandan en la peticion y extraemos el
    idestudiante
    const { idestudiante } = req.params;
    const resultado = await queries.eliminarEstudiante(idestudiante);
    if (resultado > 0) {
        console.log('Eliminado con éxito');
    }
    res.redirect('/estudiantes');
});

export default router;
