"use strict";

import {client} from '../client.js';
import jwt from 'jsonwebtoken';



const registerUser = async(request,res)=>{
    let role = request.body.role;

    try {
        if( request.body.name ==='' && request.body.email==='' && request.body.password===''){
            res.status(200).send(`You must be a valid user to register`)
        }
        else if(role==='user') {
            await client.create(request.body,(err,data)=>{
                if(err){
                    res.status(400).send(err);
                }
                else {
                    
                   
                    res.status(200).send(data)
                }
               });
            }
            else {
            
                   
                res.status(200).send(`role invalid`)
            }


       
    } catch (error) {
        res.status(400).send(error)
        
    }
 
  }
   

 



const loginUser = async(request, res)=>{

    
    const jwtsecret= 'asdfgh'
    await client.login(request.body,(err,data)=>{
        if(err){
            res.status(400).send(err);
        }
        else {
            
            if(data.status){
                const token = jwt.sign({id:data.status}, jwtsecret, {
                    expiresIn: 60*60*60})
                 // If passed all then send response token and set cookie is defaul in this function
                 res.cookie('loginToken', token);
                 res.status(200).send(`token:${token} message : ${data.message}`);
            }
            
            // { httpOnly: true }
            
        }
       }); 
    }





const updateUser = async(request,res)=>{
  
    await client.update(request.body,(err,data)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(200).send(data)


        }
    })




}

const getUser = async(request, res)=>{
    await client.read(request.body, (err,data)=>{
        if(err){

            res.status(400).send(err);
        }
        else{
            res.status(200).send(data)
        }
    })
}






const logoutUser = async(request,res)=>{
    let token;
    const jwtsecret = 'asdfgh'

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
        // Token from bearer authorization header
        token = request.headers.authorization.split(' ')[1];

    } else if (request.headers.cookie) {
        // Token from cookies
        token = request.headers.cookie.loginToken;
    }
    else {
        return res.send("token error")
    }

    if (!token) {
        
            res.send('no access')
        
    }

    try {
        // Verify token 
        const decoded = jwt.verify(token, jwtsecret);
        const requestMcs = {
            "id":decoded.id
        }
        await client.logout(requestMcs,(err,data)=>{
            if(err){
                  res.status(400).send(err)
            }
            else{

                if(data){
                     // If passed all then send response token and set cookie is none  or null  in this function
                     res.cookie('loginToken', 'null');
                     res.status(200).send(` logoutuser : ${data.id}`);
                }

            }
        })

       
    }
catch(err){
    res.status(400).send(err)

}
   


}



export {registerUser, getUser, loginUser, logoutUser, updateUser}