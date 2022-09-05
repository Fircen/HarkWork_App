import express from 'express';
import pool from '../database.js';
import bcrypt from 'bcrypt';
import { authenticateToken } from '../middleware/authorization.js';

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM user');
        res.json({users:users.rows});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await pool.query('INSERT INTO user (name, email, password) VALUES ($1, $2, $3) RETURNING *', [req.body.name, req.body.email, hashedPassword]);
        res.json({users:newUser.rows[0]});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

export default router;