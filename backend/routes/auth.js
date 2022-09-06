import express from 'express';
const router = express.Router()

// const {
//     loginUser, 
//     refreshToken, 
//     logoutUser} = require('../controllers/auth.js');

import {
    loginUser, 
    refreshToken, 
    logoutUser} from '../controllers/auth.js';

router.route('/login').post(loginUser);
router.route('/refresh_token').get(refreshToken);
router.route('/logout').delete(logoutUser);
export default router;