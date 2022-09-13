import express from 'express';
import { authenticateToken } from '../middleware/authorization.js';
const router = express.Router()
import {
    getAllFromList,
    createTaskList,
    getAllList,
    updateTask,
    getTask,
    deleteTask
} from '../controllers/task.js';

router.route('/', authenticateToken).post(createTaskList).get(getAllFromList)
router.route('/list', authenticateToken).get(getAllList)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
export default router