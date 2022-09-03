const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();


const heroku = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'hardwork',
    host: process.env.DB_HOST,
    port: 5432,

})



const pool = new Pool({
    user: 'postgres',
    password: 'Siema123',
    database: 'hardwork',
    host: 'localhost',
    port: 5432,
})


module.exports = { pool, heroku }