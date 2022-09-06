import express from 'express';
const router = express.Router()

// const {
//     getAllTask,
//     createTask,
//     updateTask,
//     getTask,
//     deleteTask } = require('../controllers/task')

import {
    getAllTask,
    createTask,
    updateTask,
    getTask,
    deleteTask} from '../controllers/task.js';

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router