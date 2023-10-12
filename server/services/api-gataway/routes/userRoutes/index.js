"use strict";
import express from 'express'// import user from './userRoutes.js'

import {router as user } from './userRoutes.js'
import {router as admin} from './adminRoutes.js'


    const router = express.Router();
    
   
    router.use('/user',user)
    router.use("/admin",admin)
   
    export { router };