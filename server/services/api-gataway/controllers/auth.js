"use strict";

import dotenv from 'dotenv';
import {client} from '../client.js'
import pkg from 'jsonwebtoken';
const { jwt } = pkg;

dotenv.config()

const jwtsecret = 'asdfghjkl'

const registerUser = async(request,res)=>{
    const jwtsecret = 'asdfgh'
   client.create(request.body,(err,data)=>{
    if(err){
        res.send('error',err);
    }
    else {
        
        const token = jwt.sign({id:request.body.email}, jwtsecret, {
            expiresIn: 60*60*5})
        
        res.cookie('authToken', token, { httpOnly: true });
        
       
        res.send(data)
    }
   });

 
}




const login =async (req, res, next) =>{
   const {email, password} = req.body;

   // Validate email and password
   if(!email || !password){
       return next(
           res.status(500).send('Please provide an email and password')
       )
   }
   //finding user by email and checking
   const [user] = await client.login(req)
      

   // Check for user with email.
   if(!user.status){
       return next(
          res.send('Invalid crediential.')
       )
   }
  


if(user.status){
    const token = jwt.sign({id:user.id}, jwtsecret, {
        expiresIn: 60*60*5})
     // If passed all then send response token and set cookie is defaul in this function
     return res.cookie('authToken', token, { httpOnly: true });
}
  
};
export { registerUser, login }
