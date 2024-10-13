import mysql from 'mysql2';
import { promisify } from 'util';
import  config  from './keys.js';
import CONSTANTS  from '../utils/utils.js';

const pool = mysql.createPool(config.database);

pool.getConnection((error, conexion) => {
    if (error) {
        console.log(error , 'error del controlador');
        switch (error.code) {
            case CONSTANTS.PROTOCOL_CONNECTION_LOST:
                console.error('DATABASE CONNECTION WAS CLOSED')
                break;
            case CONSTANTS.ER_CON_COUNT_ERROR   :
                console.error('DATABASE  HAS TO MANY CONNECTIONS')
                    break;
            case CONSTANTS.ECONNREFUSED:
                console.error('DATABASE CONNECTION WAS REFUSED')
                    break;
            case CONSTANTS.ER_ACCESS_DENIED_ERROR:
                console.error('ACCESS DENIED FOR USER')
                break;
            default:
                console.error('Error de base de datos no encontrado');
                break;
        }
    }

    if (conexion) {
        console.log('Conexión establecida con la base de datos');
        conexion.release();
    }
});

pool.query = promisify(pool.query);
export default pool;