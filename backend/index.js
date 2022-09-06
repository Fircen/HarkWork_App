const express = require('express');
const app = express()
const dotenv = require('dotenv');
const task = require('./routes/task')



//middleware
app.use(express.json())
dotenv.config();
// database

// routes
app.use('/api/v1/task', task)
// server
app.listen(5000)