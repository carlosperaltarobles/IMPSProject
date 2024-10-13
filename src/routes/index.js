import express from 'express';
const router = express.Router();
import estudianteRespository from '../repositories/EstudianteRepository.js';

router.get('/', async(req, res) => {
    const lstEstudiantes = await estudianteRespository.obtenerEstudiantes();
    console.log('Listado: ', lstEstudiantes);
    res.send('Bienvenido al laboratorio')
});

export default router;