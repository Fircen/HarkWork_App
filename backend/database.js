import pg from 'pg';
const {Pool} = pg;
import dotenv from 'dotenv';
dotenv.config();

let localConfig = {
    user:'postgres',
    password:'postgres',
    host:'localhost',
    port:'5432',
    database:'hardwork'
};

const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : localConfig;

const pool = new Pool(poolConfig);
export default pool;