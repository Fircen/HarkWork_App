const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    task: {
        type: String,
        max: 300
    },
    done: {
        type: Boolean,
        default: false
    }

})

