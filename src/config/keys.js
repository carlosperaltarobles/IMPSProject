import 'dotenv/config';

const config = {
    database: {
        host: process.env.HOST,
        user: process.env.DB_USER,
        port: process.env.PORT_DATABASE,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
};

export default config;