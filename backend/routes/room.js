import express from 'express';
const router = express.Router()
import {
    getAllRoom,
    createRoom,
    updateRoom,
    getRoom,
    deleteRoom
} from '../controllers/Room.js';

router.route('/').get(getAllRoom).post(createRoom)
router.route('/:id').get(getRoom).patch(updateRoom).delete(deleteRoom)
export default router