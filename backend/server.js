const express = require('express');
const res = require('express/lib/response');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('contected to database'))

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

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000);