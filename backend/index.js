const express = require('express');
const app = express()
const dotenv = require('dotenv');
const task = require('./routes/task')
const db = require('./database')

//middleware
app.use(express.json())
dotenv.config();

// routes
app.use('/api/v1/task', task)
// server
app.listen(3000)