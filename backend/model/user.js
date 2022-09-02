const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        max: 100,

    },
    email: {
        type: String,
        unique: true,

    },
    password: {
        type: String,
        max: 100
    }


}

)