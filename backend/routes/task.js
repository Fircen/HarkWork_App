import express from 'express';
import { authenticateToken } from '../middleware/authorization.js';
const router = express.Router()
import {
    getAllFromList,
    createTaskList,
    getAllList,
    deleteList,
    doneTask,
    updateTask,
    deleteTask,
    createTask
} from '../controllers/task.js';

router.route('/list/:id').get(getAllFromList).post(createTask).delete(deleteList)
router.route('/:id-:done').patch(doneTask)
router.route('/list').get(getAllList).post(createTaskList)
router.route('/:id').delete(deleteTask).patch(updateTask)

export default router