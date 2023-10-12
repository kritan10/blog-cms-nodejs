import express from 'express';

import { registerUser, loginUser, updateUser, logoutUser, getUser } from '../../controllers/user.js';
import { userAuthorization, protect } from '../../middlewares/auth.js';


const router = express.Router();


router.post('/registeruser',registerUser)
router.post('/loginuser',loginUser)
router.get('/getme',protect, userAuthorization, getUser)
router.put('/updateuser',protect, userAuthorization, updateUser)
router.post('/logoutuser',protect, userAuthorization, logoutUser)

export {router}