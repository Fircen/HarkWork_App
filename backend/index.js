///
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
///Routes
import task from './routes/task.js';
import auth from './routes/auth.js';
import users from './routes/users.js';
import room from './routes/room.js';

import cookieParser from 'cookie-parser';
import { createServer } from "http";
import { Server } from "socket.io";


//server
const app = express()
export const server = createServer(app);

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
app.use('/api/v1/room', room)
// server
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
    }
})

io.on('connection', function (socket) {
    socket.on('join_room', (data) => {
        socket.join(data)
        console.log('Socket with id:' + socket.id + 'joined room:' + data)
    })

    socket.on('send_message', (data) => {
        console.log(data)
        socket.to(data.room).emit('receive_message', data)
    });
})



server.listen(3001, () => {
    console.log("server Run on 3001")
})
