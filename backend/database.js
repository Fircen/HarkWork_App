const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();



const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})


const heroku = new Pool({
    user: 'postgres',
    password: 'Siema123',
    database: 'hardwork',
    host: 'localhost',
    port: 5432,
})


module.exports = pool