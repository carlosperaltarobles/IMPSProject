require('dotenv').config()

module.exports = {
    database: {
        host: process.env.HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
}