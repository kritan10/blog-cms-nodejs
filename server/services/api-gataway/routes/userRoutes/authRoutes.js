
import express from 'express'
// Controllers
import {
    register,
    login
   
} from'../../controllers/auth.js';

// import {protect } from '../../middlewares/auth.js'
// const { route } = require('./shoe');

// Express router
const router = express.Router()

router
    .route('/register')
    .post(register)

router
    .route('/login')
    .post(login)

// router
//     .route('/logout')
//     .get(logout)

// router
//     .route('/me')
//     .get(protect, getMe)

export {router}