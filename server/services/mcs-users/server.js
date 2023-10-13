import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { createUser, readUserById, updateById, deleteById, registerUser, loginByEmail, logoutById} from './modules/userModules/user.js'


import  { dirname } from 'path'

// import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// let dirPath = path.join(process.cwd(), '/server/services/common/proto/userProto/userCrud.rpc.proto')

const packageDefinition = protoLoader.loadSync(`${__dirname}/proto/userProto/userCrud.rpc.proto`,{
    keepCase:true,
    longs:String,
    defaults:true
})
let  server = new grpc.Server();

const userProto = grpc.loadPackageDefinition(packageDefinition);


server.addService(userProto.user.userCrud.rpc.userCrudService.service,{
    create: createUser,
    read : readUserById,
    update : updateById,
    delete : deleteById,
    register : registerUser,
    login: loginByEmail,
    logout: logoutById
})

   
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('server bound 50051');
    });




