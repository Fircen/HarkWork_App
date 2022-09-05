import express from 'express';
//const res = require('express/lib/response');
//const mongoose = require('mongoose');
import dotenv from 'dotenv';
import cors from 'cors';
//const userRoutes = require('./routes/users');
//const authRoutes = require('./routes/auth');
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users-routes.js';
import authRouter from './routes/auth-routes.js';

dotenv.config();

const app = express()

// mongoose.connect(
//     process.env.DB_CONNECT,
//     { useNewUrlParser: true },
//     () => console.log('contected to database'))

const post = [
    {
        username: 'Maciek',
        title: 'Post1'
    },
    {
        username: 'Adam',
        title: 'Post2'
    }
]

app.get('/', (req, res) => {
    res.json(post)
})

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
//app.use("/api/users", userRoutes);
//app.use("/api/auth", authRoutes);

app.listen(3000);