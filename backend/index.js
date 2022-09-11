///
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
///
import task from './routes/task.js';
import auth from './routes/auth.js';
import users from './routes/users.js';
import socket from './routes/socket.js'
import cookieParser from 'cookie-parser';
import { createServer } from "http";
import { Server } from "socket.io";

//server
const app = express()
const server = createServer(app);

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
app.use('/api/v1/chat', socket)
// server
server.listen(3001, () => {
    console.log("server Run on 3001")
})
