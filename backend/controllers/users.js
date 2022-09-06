import pool from '../database.js';
import bcrypt from 'bcrypt';

const getUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json({users:users.rows});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [req.body.name, req.body.email, hashedPassword]);
        res.json({users:newUser.rows[0]});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = {
    getUsers, registerUser
}