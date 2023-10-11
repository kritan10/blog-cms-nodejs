"use strict";

import dotenv from 'dotenv';
import {client} from '../client.js'
import pkg from 'jsonwebtoken';
const { jwt } = pkg;

dotenv.config()

const jwtsecret = 'asdfghjkl'

const register = async (req, res) => {
 try {
   
    
     const user = await client.create(req);
  
    if(user.status == '200'){
    const token = jwt.sign({id:user.id}, jwtsecret, {
      expiresIn: 60*60*5
  });
  res.cookie('authToken', token, { httpOnly: true });
  }
  
  
 } catch (error) {
    res.send(error)

 }


};



const login =async (req, res, next) =>{
   const {email, password} = req.body;

   // Validate email and password
   if(!email || !password){
       return next(
           res.status(500).send('Please provide an email and password')
       )
   }
   //finding user by email and checking
   const [user] = await client.read(req)
      

   // Check for user with email.
   if(!user){
       return next(
          res.send('Invalid crediential.')
       )
   }
   // Check the password matched or not with the hashed password in db
   const isMatched = await user.matchPassword(password);

   // Sent Error to the client with code 400 invalid crediential.
   if(!isMatched){
       return next(
           res.send('Invalid crediential.')
       )
   }
   const token = jwt.sign({id:user.id}, jwtsecret, {
      expiresIn: 60*60*5})
   // If passed all then send response token and set cookie is defaul in this function
   return res.cookie('authToken', token, { httpOnly: true });
};
export { register, login }
