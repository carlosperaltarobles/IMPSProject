const pool = require('../config/databaseController');

module.exports = {
    obtenerEstudiantes: async() => {
        try {
            const result = await pool.query('SELECT * FROM estudiantes');
            return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar los estudiante', error);
        }
    }
}