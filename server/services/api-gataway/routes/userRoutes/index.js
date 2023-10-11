"use strict";
import express from 'express'// import user from './userRoutes.js'
import {router as auth} from './authRoutes.js'


    const router = express.Router();
    

    // router.use("/user",user);
    router.use("/auth",auth)
   
    export { router };