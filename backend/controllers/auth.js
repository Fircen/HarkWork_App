import pool from '../database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {jwtTokens} from '../utils/jwt-helpers.js';
//import { ref } from 'joi';
//import { reset } from 'nodemon';

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const users = await pool.query('SELECT * FROM users WHERE "email" = $1', [email]);
        if(users.rows.length === 0) return res.status(401).json({error:"Incorrect email!"});

        const validPassword = await bcrypt.compare(password, users.rows[0].password);
        if(!validPassword) return res.status(401).json({error:"Incorrect password!"});

        //return res.status(200).json({error: "Login success!"});

        let tokens = jwtTokens(users.rows[0]);
        res.cookie('refresh_token', tokens.refreshToken, {httpOnly:true});
        res.json(tokens);
    } catch (error) {
        res.status(401).json({error:error.message});
    }
};

const refreshToken = (req, res) => {
    try {
        const refreshToken = req.cookies.refresh_token;
        if(refreshToken === null) return res.status(401).json({error:"Null refresh token!"});
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
            if(error) return res.status(403).json({error:error.message});
            let tokens = jwtTokens(user);
            res.cookie('refresh_token', tokens.refreshToken, {httpOnly:true});
            res.json(tokens);
        });
    } catch (error) {
        res.status(401).json({error:error.message});
    }
};

const logoutUser = (req, res) => {
    try {
        res.clearCookie('refresh_token');
        return res.status(200).json({message:'Refresh token deleted!'});
    } catch (error) {
        res.status(401).json({error:error.message});
    }
};

module.exports = {
    loginUser, refreshToken, logoutUser
}