"use strict";
import connection from "../../../../db/connection.js";
import httpStatus from "http-status";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';



    
    const createUser = async(call,callback)=>{
        const saltRound = 5;

        let response = {};
        const id = uuidv4();
        call.request.createdAt = new Date();
        call.request.id = id;

        const hashPassword = await bcrypt.hash(call.request.password, saltRound)

        call.request.password = hashPassword;
        

        try {
            // connectdb = connection.connect();
            const dbResponse = await connection.promise().query(`insert into Users set ? `,call.request)

            if(dbResponse){

                response.status = httpStatus.OK;
                response.message = `User created successfully`;
            }
            return callback(null,response);
        } catch (error) {
            return callback(error)
        }


    }

    const readUserById = async(call,callback)=>{
        let response = {};
        

        try {
            const [dbResponse] = await connection.promise().query(`select * from users where id = ?`,call.request.id);
            if(dbResponse.length>0){
                response.id = dbResponse[0].id;
                response.name = dbResponse[0].name;
                response.email = dbResponse[0].email;
                response.role = dbResponse[0].role;

            }
            return callback(null, response);

        } catch (error) {
             return callback(error);
        }
    }


    const updateById = async(call,callback)=>{
        let response= {};
        const updateDate = new Date();
        call.updatedAt = updateDate;

        try {

            const query = `update users set id = ?, name = ? email= ? password`
            const [updateResponse] =  await connection.promise().query(`update users set ? where id = ?`,call.request, call.request.id);

            if(updateResponse.affectedRows>0){
                response.status = httpStatus[200];
                response.message = `User updated for user with id ${call.request.id}`

            }
            return callback(null, response);

        } catch (error) {
            return callback(error)
        }




    }


   

export {createUser, readUserById, updateById}