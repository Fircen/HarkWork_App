import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/authorization.js';

import {
    getUsers, 
    registerUser} from '../controllers/users.js';

router.get('/', authenticateToken, getUsers);
router.route('/register').post(registerUser);
export default router;