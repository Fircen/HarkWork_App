import express from 'express';
import { authenticateToken } from '../middleware/authorization.js';
const router = express.Router()
import {
    getAllTask,
    createTask,
    updateTask,
    getTask,
    deleteTask
} from '../controllers/task.js';

router.route('/', authenticateToken).get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
export default router