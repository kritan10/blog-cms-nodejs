import express from 'express';

import { registerUser, loginUser, updateUser, deleteUser, logoutUser, getUser } from '../../controllers/adminControllers.js';
import { adminAuthorization, protect } from '../../middlewares/auth.js';


const router = express.Router();


router.post('/registeruser',registerUser)
router.post('/loginuser',loginUser)
router.put('/updateuser',protect, adminAuthorization, updateUser)
router.post('/logoutuser',protect, adminAuthorization, logoutUser)
router.get('/readuser',protect, adminAuthorization, getUser)
router.delete('/deleteuser',protect, adminAuthorization, deleteUser)

export {router}