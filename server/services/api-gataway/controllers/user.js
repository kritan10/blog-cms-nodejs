"use strict";

import {client} from '../client.js';
import jwt from 'jsonwebtoken';



const registerUser = async(request,res)=>{
  
   client.create(request.body,(err,data)=>{
    if(err){
        res.send('error',err);
    }
    else {
        
       
        res.send(data)
    }
   });

 
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
                    expiresIn: 60*60*5})
                 // If passed all then send response token and set cookie is defaul in this function
                 res.cookie('loginToken', token);
                 res.status(200).send(`token:${token} message : ${data.message}`);
            }
            
            // { httpOnly: true }
            
        }
       }); 
    }



const logoutUser = async(request,res)=>{
    await client.login(request.body,(err,data)=>{
        if(err){
            res.status(400).send('Could not logout');
        }
        else{
            res.cookie('loginToken','none')
            res.status(200).send('logout Successfull')
        }
    })


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





const deleteUser = async(request,res)=>{
    await client.delete(request.body,(err,data)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send(data)
        }
    })
}


export {registerUser, getUser, loginUser, logoutUser, updateUser, deleteUser}