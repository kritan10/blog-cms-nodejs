"use strict";
import connection from "../../../../db/connection.js";
import httpStatus from "http-status";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const createUser = async (call, callback) => {
  const saltRound = 5;

  let response = {};
  const id = uuidv4();
  call.request.createdAt = new Date();
  call.request.id = id;

  const hashPassword = await bcrypt.hash(call.request.password, saltRound);

  call.request.password = hashPassword;

  try {
    // connectdb = connection.connect();
    const dbResponse = await connection
      .promise()
      .query(`insert into Users set ? `, call.request);

    if (dbResponse) {
      response.status = httpStatus.OK;
      response.message = `User created successfully`;
    }
    return callback(null, response);
  } catch (error) {
    return callback(error);
  }
};

const readUserById = async (call, callback) => {
  let response = {};

  try {
    const [dbResponse] = await connection
      .promise()
      .query(`select * from users where id = ?`, call.request.id);
    if (dbResponse.length > 0) {
      response.id = dbResponse[0].id;
      response.name = dbResponse[0].name;
      response.email = dbResponse[0].email;
      response.role = dbResponse[0].role;
    }
    return callback(null, response);
  } catch (error) {
    return callback(error);
  }
};

const updateById = async (call, callback) => {
  let response = {};
  const updateDate = new Date();

  try {
    const query = `
  UPDATE users
  SET name = ?,
      email = ?,
      password = ?,
      role = ?,
      updatedAt = ?
  WHERE id = ?;
`;

    const queryParams = [
      call.request.name,
      call.request.email,
      call.request.password,
      call.request.role,
      updateDate,
      call.request.id,
    ];

    const [updateResponse] = await connection
      .promise()
      .query(query, queryParams);

    if (updateResponse.affectedRows > 0) {
      response.status = httpStatus[200];
      response.message = `User updated for user with id ${call.request.id}`;
    }
    return callback(null, response);
  } catch (error) {
    return callback(error);
  }
};
const deleteById = async (call, callback) => {
  let response = {};

  try {
    const query = `delete from users where id = ?`;
    const params = [call.request.id]
    const [updateResponse] = await connection.promise().query(query,params);

    if (updateResponse.affectedRows > 0) {
      response.status = httpStatus[200];
      response.message = `User deleted for user with id ${call.request.id}`;
    }
    return callback(null, response);
  } catch (error) {
    return callback(error);
  }
};
const registerUser = async (call, callback) => {
  const saltRound = 5;

  let response = {};
  const id = uuidv4();
  call.request.createdAt = new Date();
  call.request.id = id;

  const hashPassword = await bcrypt.hash(call.request.password, saltRound);

  call.request.password = hashPassword;

  try {
    // connectdb = connection.connect();
    const dbResponse = await connection
      .promise()
      .query(`insert into Users set ? `, call.request);

    if (dbResponse) {
      response.status = true;
      response.message = `User created successfully`;
    }
    return callback(null, response);
  } catch (error) {
    return callback(error);
  }
};

const loginByEmail = async (call,callback)=>{
  let response={};
  try {

    const query = `select * from users where email = ?`;
    const params = [call.request.email]
    const [dbResponse] = await connection.promise().query(query,params);

    if(dbResponse){
      const match = bcrypt.compare(dbResponse[0].password,call.request.password);

      if(match){
        response.status= dbResponse[0].id;
        response.message = `Login Successful`
      }
      
    }

    return callback(null, response)

   
  } catch (error) {
    return callback(error);
    
  }
}


const logoutById = async (call,callback)=>{
 let response ={}
 try{
    response.id = call.request.id;
    response.message = `Use this id to logout user`

    return callback(null, response)

   
  } catch (error) {
    return callback(error);
    
  }
}

export { createUser, readUserById, updateById, deleteById, registerUser, loginByEmail, logoutById };
