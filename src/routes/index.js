const express = require('express');
const router = express.Router();
const estudianteRespository = require('../repositories/EstudianteRepository');

router.get('/', async(req, res) => {
    const lstEstudiantes = await estudianteRespository.obtenerEstudiantes();
    console.log('Listado: ', lstEstudiantes);
    res.send('Bienvenido al laboratorio')
});

module.exports = router;