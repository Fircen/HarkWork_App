import express from 'express';
const app = express()
import dotenv from 'dotenv';
import task from './routes/task.js';
import auth from './routes/auth.js';
import users from './routes/users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//middleware
app.use(express.json())
app.use(cors());
app.use(cookieParser());
dotenv.config();
// database

// routes
app.use('/api/v1/task', task)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
// server
app.listen(5000)