"use strict";
import express from 'express'
import {router as user} from './userRoutes/index.js'


    const router = express.Router();
    

    router.use("/users",user);
   
    export { router };


